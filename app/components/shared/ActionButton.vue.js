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
var props = defineProps();
var router = useRouter();
var openOverlay = useUtils().openOverlay;
var handleAction = function () {
    switch (props.action.type) {
        case ActionButton_1.ButtonActionTypesEnum.OPEN_INTERNAL_PAGE: {
            if (props.action.slug) {
                return router.push(props.action.slug);
            }
            return null;
        }
        case ActionButton_1.ButtonActionTypesEnum.OPEN_OVERLAY: {
            if (props.action.overlay) {
                openOverlay(props.action.overlay);
            }
            return null;
        }
        case ActionButton_1.ButtonActionTypesEnum.OPEN_EXTERNAL_PAGE: {
            var whereToOpen = '_self';
            if (!props.action.isSameTab) {
                whereToOpen = '_blank';
            }
            if (props.action.url) {
                return window.open(props.action.url, whereToOpen);
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
var __VLS_0 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
VBtn;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign({ 'onClick': {} }, { color: (props.color) }), { class: "w-50" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { color: (props.color) }), { class: "w-50" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4;
var __VLS_5;
var __VLS_6 = ({ click: {} },
    { onClick: (__VLS_ctx.handleAction) });
var __VLS_7 = {};
var __VLS_8 = __VLS_3.slots.default;
// @ts-ignore
[handleAction,];
(props.title);
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['w-50']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () { return ({
        handleAction: handleAction,
    }); },
    __typeProps: {},
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
