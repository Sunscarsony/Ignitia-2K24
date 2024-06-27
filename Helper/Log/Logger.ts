"use server"

import {UserDataType} from "../DataFetcher/UserData";

import TelegramBot from "node-telegram-bot-api"
const token = process.env.TELEGRAM_API as string;
const bot = new TelegramBot(token, {polling: true});

import { headers } from "next/headers";
export async function getIPAddress() {
    return headers().get("x-forwarded-for");
}
const LogData = async (data:UserDataType,funName:string) =>{
    try{
        const headersList = headers()

        const secChUa = headersList.get("sec-ch-ua");
        const secChUaMobile = headersList.get("sec-ch-ua-mobile");

        let isAutomation = false;

        console.log(secChUa , secChUaMobile)

        console.log("====================================================================")

        console.log(`[ LOG ] : ${funName} : ${JSON.stringify(data)}`);
        console.log(`[ LOG ] : headerList : ${JSON.stringify(headersList)}`)
        console.log(`[ LOG ] : isAutomated : ${isAutomation}`)


        console.log("====================================================================")

        if(isAutomation && token){
            await bot.sendMessage(-1001626311603, '' +
                '<b>CRITICAL</b> \n' +
                '------------------------------ \n'+
                `<b>IP</b> : ${data.IP}, \n` +
                '------------------------------ \n'+
                `<b>Browser</b> : ${data.browser}, \n` +
                '------------------------------ \n'+
                `<b>Date</b>: ${data.date}, \n` +
                '------------------------------ \n'+
                `<b>Referrer</b> : ${data.referrer}, \n`+
                '------------------------------ \n'+
                `<b>Location</b> : \n`+
                `LAT : ${data.location?.latitude} \n`+
                `LON: ${data.location?.longitude} \n`+
                '------------------------------ \n'+
                '<b>User Agent</b> \n' +
                `${data.userAgent} \n`+
                '------------------------------ \n'
                ,
                {parse_mode:"HTML"});
        }


        return isAutomation;
    }catch (e){
        console.warn(e)
    }
    return false;
}


const GetIsAutomation = (str:string) =>{
    if (/Microsoft Edge/.test(str)) {
        return false;
    } else if (/Google Chrome/.test(str)) {
        return false;
    } else if (/Brave/.test(str)) {
        return false;
    } else if (/Safari/.test(str)) {
        return false;
    }

    return true;
}

export {LogData}