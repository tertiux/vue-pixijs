<template>
    <header class="header">
      <div class="content">
        <div class="text-wrapper">{{ $t('logo') }}</div>
        <div class="wallet">
          <div class="details">
            <div class="amount">
              <span>0.00000000</span>
              <img :src="coinIcon" />
            </div>
          </div>
          <div class="icon click">
            <img :src="chevronDownIcon" />
          </div>
          <div class="icon b">
            <img :src="walletIcon" />
          </div>
        </div>
        <div class="actions">
          <div class="icon click m-r" :title="$t('search')">
            <img :src="searchIcon" />
            <span>{{ $t('search') }}</span>
          </div>
          <div class="icon click" :title="$t('account')">
            <img :src="accountIcon" />
          </div>
          <div class="icon click" :title="$t('notifications')">
            <img :src="bellIcon" />
          </div>
          <div class="icon click" :title="$t('messages')">
            <img :src="messagesIcon" />
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  import { useI18n } from 'vue-i18n';
  import coinIcon from '../assets/coin.svg';
  import chevronDownIcon from '../assets/drop-down.svg';
  import walletIcon from '../assets/wallet.svg';
  import searchIcon from '../assets/search.svg';
  import accountIcon from '../assets/account.svg';
  import bellIcon from '../assets/bell.svg';
  import messagesIcon from '../assets/messages.svg';
  
  export default {
    setup() {
      const { t } = useI18n();
  
      return {
        coinIcon,
        chevronDownIcon,
        walletIcon,
        searchIcon,
        accountIcon,
        bellIcon,
        messagesIcon,
      };
    },
  };
  </script>
  