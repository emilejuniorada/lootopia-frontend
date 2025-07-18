"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Gift, Heart, Snowflake, Star, Users } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  type: 'national' | 'charity' | 'holiday' | 'winter' | 'christmas';
  icon: React.ReactNode;
  gradientClass: string;
  badgeColor: string;
}

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const events: Event[] = [
  {
    id: 'charity-hunt',
    title: 'Chasse Solidaire "Cœurs pour l’Espoir"',
    description: 'Participez à notre chasse au trésor solidaire où chaque énigme résolue permet de collecter des fonds pour les communautés locales.',
    date: new Date('2025-05-15T14:00:00'),
    type: 'charity',
    icon: <Heart className="w-6 h-6" />,
    gradientClass: 'bg-gradient-to-br from-pink-500 to-rose-600',
    badgeColor: 'bg-pink-600'
  },

  {
    id: 'summer-holidays',
    title: 'Aventure des Vacances d’Été',
    description: 'Lancez les vacances d’été avec une chasse au trésor en plein air, parfaite pour les familles et les amis.',
    date: new Date('2025-06-21T09:00:00'),
    type: 'holiday',
    icon: <Calendar className="w-6 h-6" />,
    gradientClass: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    badgeColor: 'bg-orange-600'
  },
  {
    id: 'bastille-day',
    title: 'Chasse au Trésor du 14 Juillet',
    description: 'Célébrez la Fête Nationale avec une chasse au trésor historique à travers les monuments parisiens et la culture française.',
    date: new Date('2025-07-14T10:00:00'),
    type: 'national',
    icon: <Star className="w-6 h-6" />,
    gradientClass: 'bg-gradient-to-br from-blue-500 via-white to-red-500',
    badgeColor: 'bg-blue-600'
  },
  {
    id: 'winter-wonderland',
    title: 'Quête du Pays des Merveilles d’Hiver',
    description: 'Laissez-vous envoûter par la magie de l’hiver avec une chasse au trésor chaleureuse en intérieur, remplie d’énigmes et de surprises hivernales.',
    date: new Date('2025-12-01T16:00:00'),
    type: 'winter',
    icon: <Snowflake className="w-6 h-6" />,
    gradientClass: 'bg-gradient-to-br from-cyan-400 to-blue-600',
    badgeColor: 'bg-cyan-600'
  },
  {
    id: 'christmas-special',
    title: 'Chasse Magique de Noël',
    description: 'Plongez dans la magie de Noël avec notre chasse au trésor festive remplie de joie, de surprises et de cadeaux.',
    date: new Date('2025-12-25T11:00:00'),
    type: 'christmas',
    icon: <Gift className="w-6 h-6" />,
    gradientClass: 'bg-gradient-to-br from-green-500 to-red-600',
    badgeColor: 'bg-green-600'
  }
];

function useCountdown(targetDate: Date): CountdownTime {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

function EventCard({ event }: { event: Event }) {
  const countdown = useCountdown(event.date);
  const isEventPassed = new Date() > event.date;

  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-0">
      <div className={`absolute inset-0 opacity-90 ${event.gradientClass}`} />
      <div className="absolute inset-0 bg-black/20" />

      <CardHeader className="relative z-10 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
              {event.icon}
            </div>
            <Badge className={`${event.badgeColor} text-white border-0`}>
              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
            </Badge>
          </div>
          <Clock className="w-5 h-5 text-white/80" />
        </div>
        <CardTitle className="text-xl font-bold text-white mt-4">
          {event.title}
        </CardTitle>
        <p className="text-white/90 text-sm leading-relaxed">
          {event.description}
        </p>
      </CardHeader>

      <CardContent className="relative z-10 text-white">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">
              {event.date.toLocaleDateString('fr-FR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
          <div className="text-xs text-white/80">
            {event.date.toLocaleTimeString('fr-FR', {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
        </div>

        {!isEventPassed ? (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-center">
              <div className="text-xs text-white/80 mb-2 uppercase tracking-wide">
                Compte à rebours
              </div>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-white/20 rounded-lg p-2">
                  <div className="text-lg font-bold">{countdown.days}</div>
                  <div className="text-xs text-white/80">Jours</div>
                </div>
                <div className="bg-white/20 rounded-lg p-2">
                  <div className="text-lg font-bold">{countdown.hours}</div>
                  <div className="text-xs text-white/80">Heures</div>
                </div>
                <div className="bg-white/20 rounded-lg p-2">
                  <div className="text-lg font-bold">{countdown.minutes}</div>
                  <div className="text-xs text-white/80">Minutes</div>
                </div>
                <div className="bg-white/20 rounded-lg p-2">
                  <div className="text-lg font-bold">{countdown.seconds}</div>
                  <div className="text-xs text-white/80">Secondes</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-sm font-medium text-white/90">
              L'évènement est terminé !
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function Events() {
  return (
    <div className="h-fit w-full">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-black text-sm mb-4">
          <Users className="w-4 h-4" />
          Encore plus de chasses au trésor
        </div>
        <h1 className="text-4xl md:text-6xl font-bold black-white mb-4">
          Aventures à venir
        </h1>
        <p className="text-xl text-black max-w-2xl mx-auto leading-relaxed">
          Participez à nos passionnantes chasses au trésor tout au long de l'année. Chaque aventure propose des défis uniques, des récompenses incroyables et des souvenirs inoubliables.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}