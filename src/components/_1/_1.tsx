import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './_1.module.css';
import { Group37Icon } from './Group37Icon';
import { Group38Icon } from './Group38Icon';
import { Group54 } from './Group54/Group54';
import { LandingPage } from './LandingPage/LandingPage';
import { PlayButtonIcon } from './PlayButtonIcon';
import { YouTube } from './YouTube/YouTube';

interface Props {
  className?: string;
}
/* @figmaId 1:7 */
export const _1: FC<Props> = memo(function _1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.landingPage2}>
        <div className={classes.rectangle34}></div>
        <div className={classes.annaOddychaczka}>Anna Oddychaczka</div>
        <div className={classes.unnamed}>“</div>
        <div className={classes.loremIpsumDolorSitAmetConsecte}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        </div>
        <div className={classes.rectangle342}></div>
        <div className={classes.eugeniuszGeniusz}>Eugeniusz Geniusz</div>
        <div className={classes.unnamed2}>“</div>
        <div className={classes.loremIpsumDolorSitAmetConsecte2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        </div>
        <div className={classes.rectangle343}></div>
        <div className={classes.kasiaKowalska}>Kasia Kowalska</div>
        <div className={classes.unnamed3}>“</div>
        <div className={classes.loremIpsumDolorSitAmetConsecte3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        </div>
        <div className={classes.waszeOpinie}>Wasze Opinie</div>
      </div>
      <div className={classes.mozeszTezMniePosUchac}>Możesz też mnie posłuchać!</div>
      <div className={classes.rectangle22}></div>
      <div className={classes.hejSpotkajmySieNaZywo}>Hej! Spotkajmy się na żywo</div>
      <div className={classes.dzisiajBedaCUDaWCudzie}>Dzisiaj będą CUDa w Cudzie. :&gt;</div>
      <div className={classes.rectangle37}></div>
      <div className={classes.dni}>Dni</div>
      <div className={classes._6}>06</div>
      <div className={classes.rectangle372}></div>
      <div className={classes.godzin}>Godzin</div>
      <div className={classes._18}>18</div>
      <div className={classes.rectangle373}></div>
      <div className={classes.minut}>Minut</div>
      <div className={classes._62}>06</div>
      <div className={classes.rectangle44}></div>
      <div className={classes.powiedzMiWiecej}>Powiedz mi więcej!</div>
      <div className={classes.landingPage3}>
        <div className={classes._2138}></div>
        <div className={classes.bezpiecznaPrzestrzenNaOddech}>
          <div className={classes.textBlock}>Bezpieczna przestrzeń</div>
          <div className={classes.textBlock2}>na oddech.</div>
        </div>
        <div className={classes.spokojWewnetrznyKtoregoDoswiad}>
          Spokój wewnętrzny, którego doświadczasz, masz na zawsze, bez względu na to, co dzieje się wokół.
        </div>
        <div className={classes.group37}>
          <Group37Icon className={classes.icon2} />
        </div>
        <div className={classes.group38}>
          <Group38Icon className={classes.icon3} />
        </div>
        <div className={classes.pexelsHeitorVerdi766578912}></div>
        <LandingPage
          className={classes.landingPage}
          classes={{ pexelsHeitorVerdi76657891: classes.pexelsHeitorVerdi76657891 }}
        />
      </div>
      <div className={classes.jakoCertyfikowanaTrenerkaOddec}>
        <div className={classes.textBlock3}>
          Jako certyfikowana trenerka oddechu Metodą Butejko oraz Oxygen Advantage, posiadam głęboką wiedzę na temat
          technik oddechowych i ich wpływu na zdrowie fizyczne i psychiczne. Moja praktyka opiera się na indywidualnym
          podejściu do klientów, pomagając im poprawić jakość oddychania, zwiększyć wydajność fizyczną i psychiczną oraz
          redukować stres.
        </div>
        <div className={classes.textBlock4}>
          <p></p>
        </div>
        <div className={classes.textBlock5}>
          Dodatkowo, jako trenerka biznesu, wykorzystuję swoje doświadczenie w rozwoju osobistym{' '}
        </div>
        <div className={classes.textBlock6}>
          i zdrowiu w pracy z przedsiębiorcami i zespołami, pomagając im osiągać lepsze wyniki, zwiększać efektywność i
          radzić sobie ze stresem zawodowym.
        </div>
        <div className={classes.textBlock7}>
          <p></p>
        </div>
        <div className={classes.textBlock8}>
          Jako pedagog, moje umiejętności w pracy z ludźmi oraz wiedza na temat procesów uczenia się pozwalają mi
          efektywnie przekazywać wiedzę i umiejętności moim uczniom oraz klientom, wspierając ich w osiąganiu
          zamierzonych celów i rozwijaniu się na wielu płaszczyznach życia.
        </div>
      </div>
      <div className={classes.hejMamNaImieKamila}>Hej, mam na imie Kamila. </div>
      <div className={classes.projektBezNazwy1}></div>
      <div className={classes._88228595_486237838720639_84700}></div>
      <YouTube
        className={classes.youTube}
        classes={{ preview: classes.preview, playButton: classes.playButton, avatar: classes.avatar }}
        swap={{
          playButton: (
            <div className={classes.playButton}>
              <PlayButtonIcon className={classes.icon} />
            </div>
          ),
        }}
      />
      <div className={classes.rectangle72}></div>
      <div className={classes.chceszDowiedziecSieWiecejOOdde}>
        <div className={classes.textBlock9}>chcesz dowiedzieć </div>
        <div className={classes.textBlock10}>się więcej o oddechu?</div>
      </div>
      <div className={classes.blog}>Blog</div>
      <div className={classes.rightArrow}></div>
      <div className={classes.rectangle722}></div>
      <div className={classes.aMozeSzkolenieLubKonsultacja}>
        <div className={classes.textBlock11}>A może szkolenie, </div>
        <div className={classes.textBlock12}>lub konsultacja?</div>
      </div>
      <div className={classes.oferta}>Oferta</div>
      <div className={classes.rightArrow2}></div>
      <div className={classes.rectangle723}></div>
      <div className={classes.AJesliZadneZPowyzszychToZnajdz}>
        <div className={classes.textBlock13}>.. ...a jeśli żadne z powyższych,</div>
        <div className={classes.textBlock14}>to znajdziesz mnie tu.</div>
      </div>
      <div className={classes.wydarzenia}>Wydarzenia</div>
      <div className={classes.rightArrow3}></div>
      <div className={classes.jakMogeCiPomoc}>Jak mogę Ci pomóc?</div>
      <Group54
        className={classes.group55}
        classes={{ facebook: classes.facebook, instagramCircle: classes.instagramCircle, youTube: classes.youTube2 }}
      />
    </div>
  );
});
