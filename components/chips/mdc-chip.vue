<template>
  <div
    :class="classes"
    :style="styles"
    tabindex="0"
    v-on="$listeners">
    <i
      v-if="haveleadingIcon"
      ref="leadingIcon"
      :class="leadingClasses"
      class="mdc-chip__icon mdc-chip__icon--leading"
    >{{ leadingIcon }}</i>
    <div
      v-if="isFilter"
      class="mdc-chip__checkmark">
      <svg
        class="mdc-chip__checkmark-svg"
        viewBox="-2 -3 30 30">
        <path
          class="mdc-chip__checkmark-path"
          fill="none"
          stroke="black"
          d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
    </div>
    <div class="mdc-chip__text">
      <slot/>
    </div>
    <i
      v-if="havetrailingIcon"
      ref="trailingIcon"
      :class="trailingClasses"
      class="mdc-chip__icon mdc-chip__icon--trailing"
      tabindex="0"
      role="button"
    >{{ trailingIcon }}</i>
  </div>
</template>
applyPassive
<script>
import MDCChipFoundation from '@material/chips/chip/foundation'
import { CustomLinkMixin, emitCustomEvent, applyPassive } from '../base'
import { RippleBase } from '../ripple'

export default {
  name: 'mdc-chip',
  mixins: [CustomLinkMixin],
  props: {
    leadingIcon: [String],
    trailingIcon: [String],
    leadingIconClasses: [Object],
    trailingIconClasses: [Object]
  },
  inject: ['mdcChipSet'],
  data() {
    return {
      classes: {
        'mdc-chip': true
      },
      styles: {}
    }
  },
  computed: {
    isFilter() {
      return this.mdcChipSet && this.mdcChipSet.filter
    },
    haveleadingIcon() {
      return !!this.leadingIcon || this.leadingIconClasses
    },
    havetrailingIcon() {
      return !!this.trailingIcon || this.trailingIconClasses
    },
    leadingClasses() {
      return Object.assign(
        {},
        {
          'material-icons': !!this.leadingIcon
        },
        this.leadingIconClasses
      )
    },
    trailingClasses() {
      return Object.assign(
        {},
        {
          'material-icons': !!this.trailingIcon
        },
        this.trailingIconClasses
      )
    }
  },
  mounted() {
    this.foundation = new MDCChipFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      hasClass: className => this.$el.classList.contains(className),
      addClassToLeadingIcon: className => {
        if (this.haveleadingIcon) {
          this.$refs.leadingIcon.classList.add(className)
        }
      },
      removeClassFromLeadingIcon: className => {
        if (this.haveleadingIcon) {
          this.$refs.leadingIcon.classList.remove(className)
        }
      },
      eventTargetHasClass: (target, className) =>
        target.classList.contains(className),
      registerEventHandler: (evtType, handler) =>
        this.$el.addEventListener(evtType, handler),
      deregisterEventHandler: (evtType, handler) =>
        this.$el.removeEventListener(evtType, handler),
      notifyInteraction: () => {
        emitCustomEvent(
          this.$el,
          MDCChipFoundation.strings.INTERACTION_EVENT,
          {
            chip: this
          },
          true
        )
      },
      notifyTrailingIconInteraction: () => {
        emitCustomEvent(
          this.$el,
          MDCChipFoundation.strings.TRAILING_ICON_INTERACTION_EVENT,
          {
            chip: this
          },
          true
        )
      },

      registerTrailingIconInteractionHandler: (evtType, handler) => {
        if (this.$refs.trailingIcon) {
          this.$refs.trailingIcon.addEventListener(
            evtType,
            handler,
            applyPassive()
          )
        }
      },
      deregisterTrailingIconInteractionHandler: (evtType, handler) => {
        if (this.$refs.trailingIcon) {
          this.$refs.trailingIcon.removeEventListener(
            evtType,
            handler,
            applyPassive()
          )
        }
      },
      notifyRemoval: () => {
        emitCustomEvent(
          this.$el,
          MDCChipFoundation.strings.REMOVAL_EVENT,
          { chip: this },
          true
        )
      },
      getComputedStyleValue: propertyName =>
        window.getComputedStyle(this.$el).getPropertyValue(propertyName),
      setStyleProperty: (property, value) =>
        this.$set(this.styles, property, value)
    })

    this.foundation.init()

    this.ripple = new RippleBase(this)
    this.ripple.init()
  },
  beforeDestroy() {
    this.ripple.destroy()
    this.foundation.destroy()
  },
  methods: {
    toggleSelected() {
      this.foundation.toggleSelected()
    },
    isSelected() {
      return this.foundation.isSelected()
    }
  }
}
</script>
