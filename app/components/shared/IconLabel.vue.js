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
var props = defineProps();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_elements;
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)(__assign({ class: "d-flex align-center" }));
if (props.icon) {
    var __VLS_0 = {}.SharedIcon;
    /** @type {[typeof __VLS_components.SharedIcon, ]} */ ;
    // @ts-ignore
    SharedIcon;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ icon: (props.icon), fill: (props.fill) }, { class: "svg-icon" })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ icon: (props.icon), fill: (props.fill) }, { class: "svg-icon" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
}
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({});
(props.label);
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['svg-icon']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () { return ({}); },
    __typeProps: {},
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
