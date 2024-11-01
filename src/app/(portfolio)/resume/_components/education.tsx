import { H3 } from '~/components/typography';

export function Education() {
  return (
    <section className="rounded-lg bg-primary/5 p-2 px-4 md:p-4 md:px-6">
      <table>
        <tbody>
          <tr className="flex flex-col gap-2 md:flex-row md:gap-0">
            <td className="text-sm md:px-3 md:text-lg">
              <H3 className="text-sm md:text-2xl">Self-Taught Web Development</H3>
              <p className="text-xs md:text-lg">YouTube, Online Learning</p>
            </td>
            <td className="text-sm text-muted-foreground md:text-lg">
              <p>2024</p>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
