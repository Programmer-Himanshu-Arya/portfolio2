import { Metadata } from 'next';
import { Introduction } from './_components/introduction';
import { InterestsAndGoals } from './_components/interests-and-goals';
import { Recommendations } from './_components/recommendations';
import { Footer } from '~/components/navigation/footer';

export const metadata: Metadata = {
  title: 'About Me | Aryadevs',
  description: 'I am a fullstack software engineer who loves to build things for the web.',
};

export default function AboutMe() {
  return (
    <main className="flex justify-center px-4 md:container">
      <section className="flex w-full max-w-3xl flex-col">
        <Introduction />
        <InterestsAndGoals />
        {/* <Recommendations /> */}
        <Footer />
      </section>
    </main>
  );
}
