<template>
    <div class="sidebar">
        <div class="item main hamburger" title="Menu">
            <svg-icon type="mdi" :path="menuIcon"></svg-icon>
            <svg-icon type="mdi" :path="closeIcon"></svg-icon>
        </div>
      
        <div class="item main" :style="{ backgroundImage: 'url(' + cardsIconImg + ')', backgroundSize: 'cover', }"></div>
      
        <div class="item main" :style="{ backgroundImage: 'url(' + ballGamesIconImg + ')', backgroundSize: 'cover', }"></div>
      
        <div class="item-holder">
            <div class="item contained" title="Rewards">
                <svg-icon type="mdi" :path="giftIcon"></svg-icon>
            </div>
            <div class="item contained">
                <img :src="splashIcon" />
            </div>
            <div class="item contained" title="Achievements">
                <img :src="achievementsIcon" />
            </div>
            <div class="item contained" title="News">
                <img :src="newsIcon" />
            </div>
            <div class="item contained" title="Chat">
                <img :src="chatIcon" />
            </div>
        </div>
        
        <div class="item-holder">
            <div class="item contained" title="Terms & Conditions">
                <img :src="agreeIcon" />
            </div>
            <div class="item contained" title="Privacy Policy">
                <img :src="securityIcon" />
            </div>
            <div class="item contained" title="Customer Care">
                <img :src="headsetIcon" />
            </div>
            <button class="item contained noscale">
                <img :src="webIcon" />
                <div class="switcherx">
                    <div class="click" @click="changeLanguage('en')">EN</div>
                    <div class="click" @click="changeLanguage('zh')">中文</div>
                </div>
            </button>
        </div>
    </div>
</template>

<script>

import cardsIcon from "../assets/cards-icon.png"
import ballGamesIcon from "../assets/ball-games.png"
import splashIcon from "../assets/splash.svg"
import achievementsIcon from "../assets/achievements.svg"
import newsIcon from "../assets/news.svg"
import chatIcon from "../assets/chat.svg"
import agreeIcon from "../assets/agree.svg"
import securityIcon from "../assets/security.svg"
import headsetIcon from "../assets/headset.svg"
import webIcon from "../assets/web.svg"
import SvgIcon from "@jamescoyle/vue-icon"
import { mdiGift, mdiMenu, mdiClose } from "@mdi/js"

export default {
    components: {
        SvgIcon
    },

    data() {
        return {
            cardsIconImg: cardsIcon,
            ballGamesIconImg: ballGamesIcon,
            giftIcon: mdiGift,
            splashIcon,
            achievementsIcon,
            newsIcon,
            chatIcon,
            agreeIcon,
            securityIcon,
            headsetIcon,
            webIcon,
            menuIcon: mdiMenu,
            closeIcon: mdiClose,
        };
    },

    methods: {
        changeLanguage(locale) {
        this.$i18n.locale = locale;
        },
    },
};
</script>