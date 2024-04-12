import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Group54.module.css';

interface Props {
  className?: string;
  classes?: {
    facebook?: string;
    instagramCircle?: string;
    youTube?: string;
    root?: string;
  };
}
/* @figmaId 7:1143 */
export const Group54: FC<Props> = memo(function Group54(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle23}></div>
      <div className={classes.podajSwojMail}>podaj swój mail...</div>
      <div className={classes.rectangle32}></div>
      <div className={classes.rectangle33}></div>
      <div className={classes.ok}>Ok!</div>
      <div className={classes.zostanmyWKontakcie}>Zostańmy w kontakcie</div>
      <div className={classes.socialMedia}>Social Media</div>
      <div className={classes.zgody}>Zgody</div>
      <div className={classes.prywatnosc}>Prywatność</div>
      <div className={classes.ciastka}>Ciastka</div>
      <div className={classes.youCan}>You Can</div>
      <div className={classes.line7}></div>
      <div className={classes.instagram}></div>
      <div className={`${props.classes?.facebook || ''} ${classes.facebook}`}></div>
      <div className={`${props.classes?.instagramCircle || ''} ${classes.instagramCircle}`}></div>
      <div className={`${props.classes?.youTube || ''} ${classes.youTube}`}></div>
    </div>
  );
});
