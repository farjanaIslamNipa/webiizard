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
            <div class="w-full" :class="screenSize === props.mediaScreen ? 'md:w-[20%]' : 'lg:w-[30%]'">
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
                    class=""
                    :class="props.navItems.customClass?.customHamburgerIcon ? props.navItems.customClass?.customHamburgerIcon : ''"
                    @click="openNav">
                    <span class="sr-only">Open menu</span>
                    <img v-if="props.navItems?.hamburgerIcon"
                        :class="props.navItems?.hamIconHeight ? props.navItems?.hamIconHeight : 'h-6',
                          props.navItems?.hamIconWidth ? props.navItems?.hamIconWidth : 'w-6'"
                          :src="props.navItems?.hamburgerIcon" alt="Jatri Menu">
                    <svg v-else
                      class="inline-block"
                      :class="props.navItems?.hamIconHeight ? props.navItems?.hamIconHeight : 'h-8',
                          props.navItems?.hamIconWidth ? props.navItems?.hamIconWidth : 'w-8'"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#dbb407"
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

                  <div>
                    <div class="flex gap-2 items-center">
                      <p class="text-white text-sm">Find Us:</p>
                      <div class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="w-5 h-5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        <a href="tel:01700557663" class="text-white text-sm">01700557663</a>
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
import {ref} from 'vue'
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
}
</script>

<style scoped>

.custom-shadow {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
}

.language-item:last-child div span{
  border-bottom: none !important;
}

@media(min-width:1024px){
 .full-width{
  width: 70% !important;
  height: auto;
 }
}
@media(max-width:1023px){
  .nav-item-container{
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 9999999;
    top: 0;
    overflow-x: hidden;
    transition: 0.3s;
    white-space: nowrap;
  }
  .left-nav{
    left: 0;
  }
  .right-nav{
    right: 0;
  }
}

@media(min-width:768px){
 .md-full-width{
  width: 80% !important;
  height: auto;
 }

}
@media(max-width:767px){
  .md-nav-item-container{
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 999999;
    top: 0;
    overflow-x: hidden;
    transition: 0.3s;
    white-space: nowrap;
  }
}
</style>