import { ImageCarousel } from '~/components/image-carousel';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FloatingDock } from '~/components/floating-dock';
import { H4 } from '~/components/typography';

export function Introduction() {
  return (
    <table className="relative flex min-h-screen items-center justify-center md:mt-0">
      <tbody>
        <tr className="flex flex-col items-center justify-between md:flex-row md:gap-4">
          <td className="w-fit">
            <ImageCarousel
              items={[
                {
                  id: 1,
                  title: 'img',
                  image: 'https://utfs.io/f/7b6ae0f8-148e-4e57-bd36-14ae0c90887b-e4obn3.gif',
                },
                {
                  id: 2,
                  title: 'himanshu',
                  image: 'https://i.ibb.co/JrktfG6/Untitled-1.png',
                },
              ]}
            />
          </td>
          <td className="pt-3 text-justify font-semibold text-secondary-foreground md:pl-10 md:pt-0">
            <H4 className="leading-8">
              {
                "Hello! I'm Himanshu, also known as Aryadevs. I'm a full-stack web developer based in India, with a deep passion for crafting engaging web applications. Specializing in the MERN stack, Next.js, and TypeScript, I also prioritize creating intuitive user experiences. Continuously expanding my skills, I'm committed to delivering high-quality solutions that meet modern web standards and am excited about future opportunities in the tech industry."
              }
            </H4>
            <FloatingDock
              items={[
                {
                  title: 'GitHub',
                  icon: <FaGithub className="size-5 md:size-10" />,
                  href: 'https://github.com/CodeDevArya',
                },
                {
                  title: 'LinkedIn',
                  icon: <FaLinkedin className="size-5 md:size-10" />,
                  href: 'https://www.linkedin.com/in/code-dev-arya/',
                },
                {
                  title: 'Instagram',
                  icon: <FaInstagram className="size-5 md:size-10" />,
                  href: 'https://www.instagram.com/aryadevs.io',
                },
              ]}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
