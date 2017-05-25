import Bubble from './Bubble';
import BubbleTheme from './Bubble.theme';

export default function install(Vue) {
  Vue.component('Bubble', Bubble);

  Vue.material.styles.push(BubbleTheme);
}
