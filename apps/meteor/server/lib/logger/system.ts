import { Meteor } from 'meteor/meteor';
import { Logger } from './Logger';
Meteor.Log = new Logger('System');
export const SystemLogger = Meteor.Log;
