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
                "At AryaDevs, we specialize in crafting custom web solutions that drive results. With a team of skilled developers, designers, and digital strategists, we build seamless, user-friendly websites and applications that help businesses thrive in the digital world. Whether you need a dynamic website, or a complex web application, we have the expertise to bring your vision to life."
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
                  href: 'https://www.linkedin.com/in/aryadevs-agency/',
                },
                {
                  title: 'Instagram',
                  icon: <FaInstagram className="size-5 md:size-10" />,
                  href: 'https://www.instagram.com/aryadevs.agency',
                },
              ]}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
