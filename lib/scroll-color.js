'use babel';
import $ from 'jquery'
import ScrollColorView from './scroll-color-view';
import { CompositeDisposable } from 'atom';

export default {
  activate(state) {
      atom.config.observe('scroll-color.ScrollBackground',function(value){
        let colorN = value
        let colorNT = `rgb(${colorN._red},${colorN._green},${colorN._blue})`
        console.log('paso por la function value:'+colorNT);
        var styleElement = document.createElement("style");
        styleElement.setAttribute("id","style-scroll")
        console.log($('#style-scroll').length);
        if($('#style-scroll').length == 0){
          document.getElementsByTagName("head")[0].append(styleElement);
        }
        $('#style-scroll').text(".scrollbars-visible-always atom-text-editor ::-webkit-scrollbar-thumb {background:"+colorNT+"}.scrollbars-visible-always ::-webkit-scrollbar-thumb{background:"+colorNT+"}")
      })
  },
  deactivate() {
    $('#style-scroll').remove()
  },
  serialize() {
  }
};
