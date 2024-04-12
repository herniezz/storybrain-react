import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './LandingPage.module.css';

interface Props {
  className?: string;
  classes?: {
    pexelsHeitorVerdi76657891?: string;
    root?: string;
  };
}
/* @figmaId 2:773 */
export const LandingPage: FC<Props> = memo(function LandingPage(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.youCan}>You Can</div>
      <div className={classes.stronaGOwna}>Strona główna</div>
      <div className={classes.metody}>Metody</div>
      <div className={classes.oferta}>Oferta</div>
      <div className={classes.wYDARZENIA}>WYDARZENIA</div>
      <div className={classes.kontakt}>Kontakt</div>
      <div className={`${props.classes?.pexelsHeitorVerdi76657891 || ''} ${classes.pexelsHeitorVerdi76657891}`}></div>
    </div>
  );
});
