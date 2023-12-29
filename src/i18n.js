// i18n.js

import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    cardGames: 'Card Games',
    ballGames: 'Ball Games',
    logo: 'Logo',
    search: 'Search',
    rewards: 'Rewards',
    achievements: 'Achievements',
    news: 'News',
    chat: 'Chat',
    termsConditions: 'Terms & Conditions',
    privacyPolicy: 'Privacy Policy',
    messages: 'Messages',
    account: 'Account',
    notifications: 'Notifications',
    customerCare: 'Customer Care',
  },
  zh: {
    cardGames: '卡牌游戏',
    ballGames: '球类游戏',
    logo: '商标',
    search: '搜索',
    rewards: '奖励',
    achievements: '成就',
    news: '新闻',
    chat: '聊天',
    termsConditions: '条款和条件',
    privacyPolicy: '隐私政策',
    messages: '消息',
    account: '账户',
    notifications: '通知',
    customerCare: '客户服务',
  },
};

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;