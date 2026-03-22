import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

type ReservationForm = {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
};

const initialReservation: ReservationForm = {
  name: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  notes: "",
};

type VisitSectionProps = {
  showReservationForm?: boolean;
  showVisitDetails?: boolean;
};

const VisitSection = ({ showReservationForm = true, showVisitDetails = true }: VisitSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reservation, setReservation] = useState<ReservationForm>(initialReservation);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setReservation((prev) => ({ ...prev, [name]: value }));
  };

  const handleReservationSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!reservation.name || !reservation.phone || !reservation.date || !reservation.time || !reservation.guests) {
      toast({
        variant: "destructive",
        title: "Bitte alle Pflichtfelder ausfüllen",
        description: "Name, Telefon, Datum, Uhrzeit und Personenzahl sind erforderlich.",
      });
      return;
    }

    const guests = Number(reservation.guests);
    if (!Number.isInteger(guests) || guests < 1 || guests > 12) {
      toast({
        variant: "destructive",
        title: "Ungültige Personenzahl",
        description: "Bitte gib eine Zahl zwischen 1 und 12 ein.",
      });
      return;
    }

    const reservationDate = new Date(`${reservation.date}T${reservation.time}:00`);
    if (Number.isNaN(reservationDate.getTime())) {
      toast({
        variant: "destructive",
        title: "Ungültiges Datum oder Uhrzeit",
        description: "Bitte prüfe deine Eingaben und versuche es erneut.",
      });
      return;
    }

    if (reservationDate < new Date()) {
      toast({
        variant: "destructive",
        title: "Reservierung liegt in der Vergangenheit",
        description: "Bitte wähle einen zukünftigen Zeitpunkt.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        id: Date.now(),
        ...reservation,
        guests,
        createdAt: new Date().toISOString(),
      };

      const existing = localStorage.getItem("megs-cafe-reservations");
      const parsed = existing ? JSON.parse(existing) : [];
      const reservations = Array.isArray(parsed) ? parsed : [];
      reservations.push(payload);
      localStorage.setItem("megs-cafe-reservations", JSON.stringify(reservations));

      setReservation(initialReservation);
      toast({
        title: "Tisch reserviert",
        description: `Danke ${payload.name}! Wir haben deine Reservierung für ${payload.date} um ${payload.time} gespeichert.`,
      });
    } catch {
      toast({
        variant: "destructive",
        title: "Reservierung konnte nicht gespeichert werden",
        description: "Bitte versuche es gleich noch einmal.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="visit" style={{ background: "hsl(var(--primary))" }}>
      <div
        ref={ref}
        className={`container mx-auto max-w-6xl py-28 px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {showVisitDetails && (
        <>
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16" style={{ background: "hsl(var(--secondary))" }} />
            <span className="font-body text-xs tracking-[0.4em] uppercase" style={{ color: "hsl(var(--secondary))" }}>Besuche uns</span>
            <div className="h-px w-16" style={{ background: "hsl(var(--secondary))" }} />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "hsl(var(--dark-fg))" }}>
            Komm und sitz bei uns
          </h2>
          <p className="font-body text-base mt-4" style={{ color: "hsl(var(--dark-muted))" }}>
            Wir freuen uns auf dich. Hier findest du uns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {/* Adresse */}
          <div className="flex flex-col items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
              style={{ background: "hsl(120 14% 28%)", color: "hsl(var(--secondary))" }}
            >
              ◎
            </div>
            <h3 className="font-display text-xl font-semibold" style={{ color: "hsl(var(--dark-fg))" }}>Adresse</h3>
            <p className="font-body text-base leading-relaxed" style={{ color: "hsl(var(--dark-muted))" }}>
              Karl-Heine-Str. 56b<br />
              Leipzig, Deutschland
            </p>
            <a
              href="https://maps.google.com/?q=Karl-Heine-Str.+56b+Leipzig"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-medium tracking-widest uppercase underline underline-offset-4 transition-opacity hover:opacity-60"
              style={{ color: "hsl(var(--secondary))" }}
            >
              Route planen
            </a>
          </div>

          {/* Öffnungszeiten */}
          <div className="flex flex-col items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
              style={{ background: "hsl(120 14% 28%)", color: "hsl(var(--secondary))" }}
            >
              ◷
            </div>
            <h3 className="font-display text-xl font-semibold" style={{ color: "hsl(var(--dark-fg))" }}>Öffnungszeiten</h3>
            <div className="font-body text-base space-y-1" style={{ color: "hsl(var(--dark-muted))" }}>
              <div className="flex justify-between gap-10">
                <span>Täglich</span>
                <span className="font-medium" style={{ color: "hsl(var(--dark-fg))" }}>08:00 – 16:00</span>
              </div>
            </div>
            <p className="font-body text-xs mt-1" style={{ color: "hsl(var(--dark-muted) / 0.7)" }}>
              Küche schließt 15:30 · Letzter Kaffee 15:50
            </p>
          </div>

          {/* Kontakt */}
          <div className="flex flex-col items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
              style={{ background: "hsl(120 14% 28%)", color: "hsl(var(--secondary))" }}
            >
              ◈
            </div>
            <h3 className="font-display text-xl font-semibold" style={{ color: "hsl(var(--dark-fg))" }}>Kontakt</h3>
            <div className="font-body text-base space-y-2" style={{ color: "hsl(var(--dark-muted))" }}>
              <p>
                <a
                  href="mailto:hallo@megscafe.de"
                  className="transition-opacity hover:opacity-70"
                  style={{ color: "hsl(var(--dark-fg))" }}
                >
                  hallo@megscafe.de
                </a>
              </p>
              <p>
                <a
                  href="tel:+493412345678"
                  className="transition-opacity hover:opacity-70"
                  style={{ color: "hsl(var(--dark-fg))" }}
                >
                  +49 341 234 5678
                </a>
              </p>
            </div>
            <a
              href="https://www.instagram.com/megs_leipzig/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm font-medium tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105"
              style={{ background: "hsl(var(--dark-fg))", color: "hsl(var(--primary))" }}
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              @megs_leipzig
            </a>
          </div>
        </div>
        </>
        )}

        {showReservationForm && (
        <div className={`${showVisitDetails ? "mt-20" : "mt-0"} grid grid-cols-1 lg:grid-cols-5 gap-10 items-start`}>
          <div className="lg:col-span-2 rounded-2xl p-8" style={{ background: "hsl(var(--dark-fg) / 0.06)" }}>
            <p className="font-body text-xs tracking-[0.35em] uppercase" style={{ color: "hsl(var(--secondary))" }}>
              Tischreservierung
            </p>
            <h3 className="font-display text-3xl mt-4" style={{ color: "hsl(var(--dark-fg))" }}>
              Sichere dir deinen Platz
            </h3>
            <p className="font-body text-sm mt-4 leading-relaxed" style={{ color: "hsl(var(--dark-muted))" }}>
              Reserviere in wenigen Sekunden deinen Tisch. Wir bestaetigen dir die Anfrage beim Eintreffen im Cafe.
            </p>
            <div className="mt-8 space-y-3 font-body text-sm" style={{ color: "hsl(var(--dark-muted))" }}>
              <p>• Fuer Fruehstueck empfehlen wir 1-2 Tage Vorlauf.</p>
              <p>• Gruppen ab 8 Personen bitte mit Notiz anmelden.</p>
              <p>• Diese Demo speichert Reservierungen lokal im Browser.</p>
            </div>
          </div>

          <form
            onSubmit={handleReservationSubmit}
            className="lg:col-span-3 rounded-2xl p-6 md:p-8 shadow-sm"
            style={{ background: "hsl(var(--dark-fg) / 0.08)", border: "1px solid hsl(var(--dark-fg) / 0.12)" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="reservation-name" style={{ color: "hsl(var(--dark-fg))" }}>Name</Label>
                <Input
                  id="reservation-name"
                  name="name"
                  value={reservation.name}
                  onChange={handleFieldChange}
                  placeholder="Dein Name"
                  required
                  className="bg-white/95"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reservation-phone" style={{ color: "hsl(var(--dark-fg))" }}>Telefon</Label>
                <Input
                  id="reservation-phone"
                  name="phone"
                  value={reservation.phone}
                  onChange={handleFieldChange}
                  placeholder="+49 ..."
                  required
                  className="bg-white/95"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reservation-date" style={{ color: "hsl(var(--dark-fg))" }}>Datum</Label>
                <Input
                  id="reservation-date"
                  type="date"
                  name="date"
                  value={reservation.date}
                  onChange={handleFieldChange}
                  required
                  className="bg-white/95"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reservation-time" style={{ color: "hsl(var(--dark-fg))" }}>Uhrzeit</Label>
                <Input
                  id="reservation-time"
                  type="time"
                  name="time"
                  value={reservation.time}
                  onChange={handleFieldChange}
                  required
                  className="bg-white/95"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="reservation-guests" style={{ color: "hsl(var(--dark-fg))" }}>Personenzahl</Label>
                <Input
                  id="reservation-guests"
                  type="number"
                  name="guests"
                  value={reservation.guests}
                  onChange={handleFieldChange}
                  min={1}
                  max={12}
                  required
                  className="bg-white/95"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="reservation-notes" style={{ color: "hsl(var(--dark-fg))" }}>Notiz (optional)</Label>
                <Textarea
                  id="reservation-notes"
                  name="notes"
                  value={reservation.notes}
                  onChange={handleFieldChange}
                  placeholder="Allergien, Kinderstuhl, Geburtstag..."
                  className="min-h-[110px] bg-white/95"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="sm:w-auto w-full font-body tracking-wide"
                style={{ background: "hsl(var(--dark-fg))", color: "hsl(var(--primary))" }}
              >
                {isSubmitting ? "Wird gespeichert..." : "Jetzt reservieren"}
              </Button>
              <p className="font-body text-xs" style={{ color: "hsl(var(--dark-muted))" }}>
                Mit Absenden stimmst du einer Kontaktaufnahme zur Reservierung zu.
              </p>
            </div>
          </form>
        </div>
        )}
      </div>
    </section>
  );
};

export default VisitSection;
