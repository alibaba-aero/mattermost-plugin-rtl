import $ from 'jquery'
import { isRTL } from './rtl'

export default class Plugin {
    initialize(registry, store) {
        // @see https://developers.mattermost.com/extend/plugins/webapp/reference/
        setTimeout(() => {
            this.makeRTL('#post_textbox')
        }, 3000)

        setInterval(() => {
            this.fixAllMessages()
        }, 1000)
    }

    fixAllMessages() {
        $('.post-message__text').each((i, el) => {
            const $el = $(el);
            const text = $el.text()
            const dir = isRTL(text) ? 'rtl' : 'ltr'
            $el.attr('dir', dir)
        })
    }

    makeRTL(selector) {
        const dir = $(selector);
        dir.keyup(function (e) {
            if (isRTL(dir.val())) {
                $(this).css("direction", "rtl");
            } else {
                $(this).css("direction", "ltr");
            }
        });
    }
}

window.registerPlugin('aero.alibaba.mattermost-plugin-rtl', new Plugin());
