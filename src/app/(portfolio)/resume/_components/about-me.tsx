import { CopyableText } from '~/components/typography';
import { getRelativeDate } from '~/lib/date';
import { LocalTime } from './local-time';

export function AboutMe() {
  return (
    <section className="rounded-lg bg-primary/5 py-2 pl-3 md:p-4 md:px-6">
      <div>
        <table className="text-xs text-secondary-foreground md:text-lg">
          <tbody>
            <tr>
              <td className="text-muted-foreground md:pr-4">CEO Name:</td>
              <td>Himanshu Arya</td>
            </tr>
            <tr>
              <td className="text-muted-foreground md:pr-4">Nationality:</td>
              <td>Indian 🇮🇳</td>
            </tr>
            <tr>
              <td className="text-muted-foreground md:pr-4">Timezone:</td>
              <LocalTime />
            </tr>
            <tr>
              <td className="text-muted-foreground md:pr-4">Languages:</td>
              <td>Hindi, English</td>
            </tr>
            <tr>
              <td className="text-muted-foreground md:pr-4">Email:</td>
              <td>
                <CopyableText>aryah144@gmail.com</CopyableText>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
