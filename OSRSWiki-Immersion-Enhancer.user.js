// ==UserScript==
// @name    OldSchool Runescape Wiki Immersion Enhancer
// @version 1.0.0
// @author  2018, Beagon (https://openuserjs.org/users/Beagon)
// @license GPL-3.0
// @copyright 2018, Beagon (https://github.com/thunderofnl)
// @description Enhances the OSRS Wiki experience by removing all anti-immersion elements.
// @require  https://code.jquery.com/jquery-3.2.1.min.js
// @include  http://oldschoolrunescape.wikia.com/wiki/*
// @include  https://oldschoolrunescape.wikia.com/wiki/*
// @grant    none
// ==/UserScript==
//Remove all elements
$(".wds-global-navigation__logo, .wds-is-games, .wds-is-movies, .wds-is-tv," +
  ".wds-global-navigation__start-a-wiki, .wds-global-navigation__wikis-menu," +
  ".mcf-content, #WikiaRailWrapper, #WikiaFooter, #WikiaTopAds, .wds-global-footer").each(function() {
  $(this).remove();
});

//Change some css values for the top bar
$(".wds-global-navigation, .wds-dropdown, .wds-global-navigation__search").css({"background-color":'rgba(0, 0, 0, 0)',"box-shadow":'0 0 0 0 rgba(0, 0, 0, 0)'});
