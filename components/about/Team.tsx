import React from 'react';
import Image from 'next/image';
import { TwitterIcon, InstagramIcon, LinkedInIcon } from '../icons';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

/**
 * Team member interface
 */
interface TeamMember {
  name: string;
  role: string;
  image: string;
  // Aspect ratio for consistent image display in team members
  aspectRatio: string;
  socials: {
    twitter: string;
    instagram: string;
    linkedin: string;
  };
}

/**
 * Team member data with consistent aspect ratio
 */
const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Tom Cruise',
    role: 'Founder & Chairman',
    image:
      'https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/7668e8e5b4fa7e979e028b24f079ff6a654c4ebc',
    aspectRatio: 'aspect-[0.75]', // Standardized aspect ratio for all members
    socials: {
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Emma Watson',
    role: 'Managing Director',
    image:
      'https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/ebf2f69a6a22d96dbd724d228a5d41189997c6de',
    aspectRatio: 'aspect-[0.75]', // 3:4 aspect ratio
    socials: {
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Will Smith',
    role: 'Product Designer',
    image:
      'https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/160ebde972504476e00b67b333faca1618ffc8e6',
    aspectRatio: 'aspect-[0.75]', // Consistent with other team members
    socials: {
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
    },
  },
];

/**
 * TeamMemberCard Component
 */
const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className='flex flex-col items-stretch w-full max-w-[370px] mx-auto'>
    <div className='rounded bg-neutral-100 overflow-hidden pt-6 md:pt-[39px] px-4 md:px-[37px]'>
      <div className='relative aspect-[0.75] w-full'>
        <Image
          src={member.image}
          alt={member.name}
          fill
          className='object-contain'
          sizes='(max-width: 768px) 100vw, 370px'
          priority
        />
      </div>
    </div>
    <div className='flex flex-col items-stretch mt-8'>
      <div className='text-black'>
        <div className='text-[32px] font-medium leading-none tracking-[1.28px]'>
          {member.name}
        </div>
        <div className='text-base font-normal mt-2'>{member.role}</div>
      </div>
      <div className='flex gap-4 mt-4'>
        <button
          aria-label='Twitter'
          className='flex w-6 shrink-0 h-6 hover:opacity-70 transition-opacity'
          onClick={() => window.open(member.socials.twitter, '_blank')}
        >
          <TwitterIcon className='w-6 h-6' color='black' />
        </button>
        <button
          aria-label='Instagram'
          className='flex w-6 shrink-0 h-6 hover:opacity-70 transition-opacity'
          onClick={() => window.open(member.socials.instagram, '_blank')}
        >
          <InstagramIcon className='w-6 h-6' color='black' />
        </button>
        <button
          aria-label='LinkedIn'
          className='w-6 h-6 hover:opacity-70 transition-opacity'
          onClick={() => window.open(member.socials.linkedin, '_blank')}
        >
          <LinkedInIcon className='w-6 h-6' color='black' />
        </button>
      </div>
    </div>
  </div>
);

/**
 * Team Component with Carousel
 */
export const Team = () => {
  const [api, setApi] = React.useState<
    import('embla-carousel').EmblaCarouselType | null
  >(null);
  const [current, setCurrent] = React.useState(0);

  // Update current slide when it changes
  React.useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className='mt-16 md:mt-[140px]'>
      <Carousel
        setApi={(api) => setApi(api ?? null)}
        className='w-full'
        opts={{
          align: 'start',
          loop: true,
          skipSnaps: false,
          slidesToScroll: 1,
          breakpoints: {
            '(min-width: 768px)': { slidesToScroll: 3 },
          },
        }}
      >
        <CarouselContent className='-ml-4 md:-ml-[30px]'>
          {TEAM_MEMBERS.map((member) => (
            <CarouselItem
              key={member.name}
              className='pl-4 md:pl-[30px] md:basis-1/3'
            >
              <div className='p-1'>
                <TeamMemberCard member={member} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className='self-center flex items-center gap-2 md:gap-3 mt-6 md:mt-10 justify-center'>
        {TEAM_MEMBERS.map((member, index) => (
          <button
            key={member.name}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              'w-3 h-3 rounded-full transition-all',
              current === index
                ? 'bg-black'
                : 'bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.5)]'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
