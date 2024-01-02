import '../ee/client/ecdh'; //企业版公私钥协商
import './polyfills'; // 不是很清楚JS的文化，看起来是为了解决兼容问题的

import '../lib/oauthRedirectUriClient';
import './lib/meteorCallWrapper'; // 重载DDP的method调用方法为REST v1
import './importPackages';

import '../ee/client';
import './methods';
import './startup';
import './views/admin';
import './views/marketplace';
import './views/account';
import './views/teams';
import './views/outlookCalendar';
