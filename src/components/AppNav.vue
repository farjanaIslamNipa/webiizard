<template>
    <!-- 
      KEYWORDS TO FIND SECTIONS EASILY 
    
      LOGO AND HAMBURGER SECTION
      LOGO SECTION
      HAMBURGER SECTION
      NAV ITEMS SECTION
      COLLAPSIBLE SECTION LOGO
      CLOSE BUTTON OF COLLAPSIBLE SECTION
      NAV LINK SECTION
      SPECIAL LINKS SECTION
      LANGUAGE SECTION
    
    -->
      <div id="nav-height" :class="props.sticky ? 'fixed top-0 w-full z-50' : 'relative'">
        <div 
        class="z-50" 
        :class="
        props.navItems?.navBg ? props.navItems.navBg : 'bg-white',
        props.navItems?.navPadding ? props.navItems.navPadding : 'py-4 md:py-6 px-4 md:px-10 lg:px-[60px] xl:px-[100px] 2xl:px-[200px]',
        (props.hasBorder ? (props.navItems.bottomBorder ? props.navItems?.bottomBorder : 'border-b-2 border-gray-100') : ''),
        (props.hasShadow ? (`${props.navItems?.bottomShadow ? props.navItems.bottomShadow : 'shadow-md'} border-none`) : '') ,
        props.navItems.customClass?.customNav ? props.navItems.customClass.customNav : ''
        ">
          <div class="flex w-full gap-12 items-center">
            <div class="" :class="screenSize === props.mediaScreen ? '' : ''">
              <div class="flex justify-between items-center">
                <div>
                  <router-link to="/" >
                    <img class="inline-block" :class="
                          props.navItems.logoHeight ? props.navItems.logoHeight : 'h-10',
                          props.navItems.logoWidth ? props.navItems.logoWidth : 'w-auto',
                          props.navItems.customClass?.customLogo ? props.navItems.customClass?.customLogo : ''"
                          :src="props.navItems.logoSrc ? props.navItems.logoSrc : '/images/brand-logo.png'"
                          :alt="props.navItems.logoAlt ? props.navItems.logoAlt : 'Webiizard Logo'
                          "/>
                  </router-link>
                </div>
                <div class="-mr-2 -my-2" :class="screenSize === props.mediaScreen ? 'md:hidden' : 'lg:hidden'">
                  <button
                    type="button"
                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                    :class="props.navItems.customClass?.customHamburgerIcon ? props.navItems.customClass?.customHamburgerIcon : ''"
                    @click="openNav">
                    <span class="sr-only">Open menu</span>
                    <img v-if="props.navItems?.hamburgerIcon"
                        :class="props.navItems?.hamIconHeight ? props.navItems?.hamIconHeight : 'h-5',
                          props.navItems?.hamIconWidth ? props.navItems?.hamIconWidth : 'w-5'"
                          :src="props.navItems?.hamburgerIcon" alt="Jatri Menu">
                    <svg v-else
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div
              id="nav-items"
              @click="closeSideNav"
              class="bg-black/50"
              :class="
                screenSize === props.mediaScreen ? 'md-nav-item-container md-full-width' : 'nav-item-container full-width',
                props.expandFrom === 'right' ? 'right-nav' : 'left-nav',
                props.navItems?.navBg ? `lg:${props.navItems.navBg}` : 'lg:bg-white'
                "
              >
              <div
              @click="preventClosing"
              class="py-8 w-[70%] sm:w-[60%]"
              :class="
              screenSize === props.mediaScreen ? 'h-screen md:h-auto' : ' h-screen lg:h-auto',
              props.expandFrom === 'right' ? 'ml-auto' : '',
              props.navItems?.smallNavBg ? `${props.navItems.smallNavBg}` : 'bg-white',
              screenSize === props.mediaScreen ? `md:${props.navItems.smallNavBg ? props.navItems.smallNavBg : 'bg-white'} md:w-full md:py-0` : `lg:${navItems.smallNavBg} lg:py-0 md:w-[40%] lg:w-full`
              ">
                <div class="block" :class="screenSize === props.mediaScreen ? 'md:hidden' : 'lg:hidden'">
                  <div class="flex justify-between">
                    <div class="pl-8 pb-6">
                      <router-link to="/">
                        <img :class="
                        props.navItems?.logoHeight ? props.navItems?.logoHeight : 'h-9',
                        props.navItems?.logoWidth ? props.navItems?.logoWidth : 'w-auto',
                        props.navItems.customClass?.customLogo ? props.navItems.customClass?.customLogo : ''"
                        :src="props.navItems.logoSrc ? props.navItems.logoSrc : '/images/brand-logo.png'"
                        :alt="props.navItems.logoAlt ? props.navItems.logoAlt : 'Webiizard Logo'"/>
                      </router-link>
                    </div>
                    <div class="absolute right-4 md:right-9 top-6 md:top-7">
                      <button
                        type="button"
                        class="bg-white rounded-md inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                        :class="props.navItems?.closeIcon ? 'p-2' : 'p-1' + props.navItems.customClass?.customCloseIcon ? props.navItems.customClass?.customCloseIcon : ''"
                        @click="closeSideNav"
                      >
                        <span class="sr-only">Close menu</span>
                        <img v-if="props.navItems?.closeIcon"
                        :class="props.navItems?.closeIconHeight ? props.navItems?.closeIconHeight : 'h-4',
                          props.navItems.closeIconWidth ? props.navItems?.closeIconWidth : 'w-4'"
                          :src="props.navItems?.closeIcon" alt="Webiizard Menu">
                        <svg
                          v-else
                          class="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div
                class="items-center pl-8 xl:pl-0"
                :class="
                screenSize === props.mediaScreen ? 'md:flex' : 'lg:flex',
                ( props.navItems?.specialLinkOne || props.navItems?.specialLinkTwo) ? 'justify-between' : 'justify-end'
                ">
                  <nav class="space-y-3 space-x-0 xl:space-x-10" :class="screenSize === props.mediaScreen ? 'md:flex md:space-x-6 md:space-y-0' : 'lg:flex lg:space-x-6 lg:space-y-0'">
                    <router-link
                      v-for="navLink in props.navItems?.navLinks"
                      :key="navLink.id"
                      :to="navLink.link"
                      @click="closeSideNav"
                      :class="
                      props.navItems.linkClasses?.fontSize ? props.navItems.linkClasses.fontSize : 'text-base',
                      props.navItems.linkClasses?.fontWeight ? props.navItems.linkClasses.fontWeight : 'font-medium',
                      props.navItems.linkClasses?.color ? props.navItems.linkClasses.color : 'text-gray-800',
                      screenSize === props.mediaScreen ? 'md:inline-block': 'lg:inline-block',
                      props.navItems.linkClasses?.hoverColor,
                      props.navItems.linkClasses?.customClass
                      "
                      class="transform duration-200 ease-out block"
                      :active-class="navItems?.linkClasses?.activeClass"
                      >
                      {{ navLink?.name }}
                    </router-link>
                  </nav>

                  <div v-if="navItems?.languages || navItems?.specialLinkOne || navItems?.specialLinkTwo">
                    <div class="gap-x-0 md:gap-x-3 xl:gap-x-6 items-center" :class="screenSize === mediaScreen ? 'md:flex' : 'lg:flex'">
                      <div v-if="navItems?.specialLinkOne" class="mb-3 lg:mb-0">
                        <a
                        :href="navItems.specialLinkOne?.link"
                        target="_blank"
                        class="flex justify-center items-center text-base leading-6 font-medium capitalize"
                        :class="navItems.specialLinkOne?.class, navItems.customClass?.customSpecialLinkOne">
                        <div class="flex gap-x-2 items-center">
                          <img v-if="navItems.specialLinkOne?.icon" :src="navItems.specialLinkOne.icon" :alt="navItems.specialLinkOne?.name">
                          <span>{{ navItems.specialLinkOne?.name }}</span>
                        </div>
                        </a>
                      </div>
                      <div v-if="navItems?.specialLinkTwo">
                        <a
                        :href="navItems.specialLinkTwo.link"
                         target="_blank"
                         class="flex justify-center items-center text-base leading-6 font-medium capitalize"
                        :class="navItems.specialLinkTwo?.class, navItems.customClass?.customSpecialLinkTwo">
                          <div class="flex gap-x-2">
                            <img v-if="navItems.specialLinkTwo?.icon" :src="navItems.specialLinkTwo?.icon" :alt="navItems.specialLinkTwo?.name">
                            <span>{{ navItems.specialLinkTwo?.name }}</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="props.sticky" id="adjust-spacing"></div>
    </template>
<script setup>
import { ref } from 'vue';

const props = defineProps({
  navItems: Object,
  webLanguage: String,
  fromLeft: Boolean,
  expandFrom: String,
  border: Boolean,
  shadow: Boolean,
  mediaScreen: String,
  sticky: Boolean,
  hasBorder: Boolean,
  hasShadow: Boolean
})

console.log(props.navItems.navPadding, 'props')

const screenSize = ref('md')

const openNav = () => {
      const sideNav = document.getElementById("nav-items");
      sideNav.style.width = "100%";
    }

const preventClosing = (event) => {
  event.stopPropagation();
}

const closeSideNav = () =>{
      const sideNav = document.getElementById("nav-items");
      if(sideNav.style.width === "100%") {sideNav.style.width = "0" }
  }

window.onload = function() {
if(props.sticky === true){
    const navHeight = document.getElementById('nav-height').getBoundingClientRect().height
    document.getElementById('adjust-spacing').style.height = navHeight + 'px'
  }
};
</script>