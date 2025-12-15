"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var ActionButton_1 = require("~/core/types/ActionButton");
var name = useDisplay().name;
var props = defineProps();
var router = useRouter();
var openOverlay = useUtils().openOverlay;
var currentImage = computed(function () {
    switch (name.value) {
        case 'lg':
            return props.option.contentRules.LG;
        case 'md':
            return props.option.contentRules.MD;
        case 'sm':
            return props.option.contentRules.SM;
        case 'xl':
            return props.option.contentRules.XL;
        case 'xs':
            return props.option.contentRules.XS;
        default:
            return props.option.contentRules.LG;
    }
});
var handleClickAction = function () {
    switch (props.option.action.actionType) {
        case ActionButton_1.ButtonActionTypesEnum.OPEN_INTERNAL_PAGE: {
            if (props.option.action.slug) {
                return router.push(props.option.action.slug);
            }
            return null;
        }
        case ActionButton_1.ButtonActionTypesEnum.OPEN_OVERLAY: {
            if (props.option.action.overlay) {
                openOverlay(props.option.action.overlay);
            }
            return null;
        }
        case ActionButton_1.ButtonActionTypesEnum.OPEN_EXTERNAL_PAGE: {
            var whereToOpen = '_self';
            if (!props.option.action.isSameTab) {
                whereToOpen = '_blank';
            }
            if (props.option.action.url) {
                return window.open(props.option.action.url, whereToOpen);
            }
            return null;
        }
        default:
            return null;
    }
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_elements;
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ onClick: (__VLS_ctx.handleClickAction) }, { classs: "d-flex justify-center align-center" }));
// @ts-ignore
[handleClickAction,];
var __VLS_0 = {}.VImg;
/** @type {[typeof __VLS_components.VImg, typeof __VLS_components.vImg, ]} */ ;
// @ts-ignore
VImg;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ src: (__VLS_ctx.currentImage) }, { style: {} })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ src: (__VLS_ctx.currentImage) }, { style: {} })], __VLS_functionalComponentArgsRest(__VLS_1), false));
// @ts-ignore
[currentImage,];
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () { return ({
        currentImage: currentImage,
        handleClickAction: handleClickAction,
    }); },
    __typeProps: {},
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
