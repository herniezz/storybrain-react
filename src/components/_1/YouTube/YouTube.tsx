import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { PlayButtonIcon } from './PlayButtonIcon';
import classes from './YouTube.module.css';
import { YoutubeIcon } from './YoutubeIcon';
import { YoutubeIcon2 } from './YoutubeIcon2';

interface Props {
  className?: string;
  classes?: {
    preview?: string;
    playButton?: string;
    avatar?: string;
    root?: string;
  };
  swap?: {
    playButton?: ReactNode;
  };
}
/* @figmaId 155:689 */
export const YouTube: FC<Props> = memo(function YouTube(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.preview || ''} ${classes.preview}`}></div>
      <div className={`${props.classes?.playButton || ''} ${classes.playButton}`}>
        {props.swap?.playButton || <PlayButtonIcon className={classes.icon} />}
      </div>
      <div className={classes.headGradient}></div>
      <div className={classes.icon2}>
        <YoutubeIcon className={classes.icon3} />
      </div>
      <div className={classes.share}>Share</div>
      <div className={classes.watchLater}>Watch later</div>
      <div className={classes.icon4}>
        <YoutubeIcon2 className={classes.icon5} />
      </div>
      <div className={classes.officeHoursComplexComponentArc}>Office Hours: Complex Component Architecture</div>
      <div className={`${props.classes?.avatar || ''} ${classes.avatar}`}></div>
    </div>
  );
});
