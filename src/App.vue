<script setup>
import { RouterView } from 'vue-router'
import AppNav from './components/AppNav.vue';

const navItems = {
// Nav link options
    navLinks: [
    {
      id:1,
      name:'Home',
      link:'/',
      icon:'',
    },
    {
      id:2,
      name:'About us',
      link:'/about-us',
      icon:'',
    },
    {
      id:3,
      name:'Career',
      link:'/career',
      icon:'',
    },
    {
      id:4,
      name:'Contact us',
      link:'/contact-us',
      icon:'',
    },
    ],
    linkClasses:{
        fontSize:'text-base',
        fontWeight:'font-medium',
        color:'text-white',
        display:'block lg:inline-block',
        hoverColor:'hover:text-[#f04935]',
        activeClass:'active-nav',
        customClass:'menu-link'
    },

//  General options
    navBg:'bg-brand',
    smallNavBg:'bg-brand',
    bottomBorder: 'border-b-2 border-gray-100',
    bottomShadow: 'shadow-md',
    logoSrc: '/images/brand-logo.png',
    logoAlt: 'Webiizard Logo',
    logoHeight: 'h-9',
    logoWidth: 'w-auto',
    hamburgerIcon:'/images/hamburger-icon.svg',
    hamIconHeight: 'h-5',
    hamIconWidth: 'w-5',
    closeIcon: '/images/close-icon.svg',
    closeIconHeight: 'h-4',
    closeIconWidth: 'w-4',

//   Special Link Options
    specialLinkOne: {
        name:'Rental', 
        icon:'/images/car-svg.svg', 
        link:'https://rental.jatri.co/',
        class: 'rounded-full border border-[#EDEDED] h-[46px] w-[117px]'
    },
    specialLinkTwo: {
        name:'Ticket', 
        icon:'/images/ticket.svg', 
        link:'https://rental.jatri.co/',
        class: 'bg-[#f04935] text-white rounded-full border border-[#EDEDED] h-[46px] w-[117px]'
    },

    // Custom classes for edit
    customClass:{
        customNav:'custom-nav',
        customLogo: 'custom-logo',
        customHamburgerIcon: 'custom-hamburger-icon',
        customCloseIcon: 'custom-close-icon',
        customSpecialLinkOne:'custom-special-link-one',
        customSpecialLinkTwo:'custom-special-link-two',
    }
}

</script>

<template>
  <AppNav 
  :navItems="navItems"
   webLanguage="English" 
   expandFrom="left" 
  :hasBorder="false" 
  :hasShadow="true" 
  :sticky="true"
   mediaScreen="lg"
  />
  <RouterView />
</template>

<style scoped>
.active-nav{
  color: #f04935 !important;
  font-weight: 700 !important;
}
</style>
