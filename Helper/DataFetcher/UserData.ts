"use client"
interface UserDataType {
    isAllFound: boolean;
    location: {
        latitude: number;
        longitude: number;
    } | undefined;
    mac: string | undefined;
    IP: string | undefined;
    date: string | undefined;
    browser: string | undefined;
    referrer: string | undefined;
    screenWidth: number | undefined;
    screenHeight: number | undefined;
    userLanguage: string | undefined;
    userCookie: string | undefined;
    userTimezone: string | undefined;
    isAutomation: boolean;
    isHeadless: boolean;
    userAgent : string,
}

export type {UserDataType}

interface CustomWindow extends Window {
    chrome?: any;
    webdriver ?: any,
}


export const GetUserData = async (): Promise<UserDataType> => {
    const locationData = await getLocation().catch(()=>{
        return undefined;
    });
    const UA = getUA();
    const referrer = document.referrer;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const userLanguage = navigator.language;
    const userCookie = document.cookie;
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const userIP = await getPublicIPAddress();
    const isAutomation = detectAutomation();
    const isHeadless = detectHeadless();

    const userData: UserDataType = {
        isAllFound: false, // Initialize as false
        location: locationData,
        mac: 'NULL',
        IP: userIP,
        date: new Date().toISOString(),
        browser: UA,
        referrer,
        screenWidth,
        screenHeight,
        userLanguage,
        userCookie,
        userTimezone,
        isAutomation,
        isHeadless,
        userAgent : JSON.stringify(navigator.userAgent)
    };

    // Check each piece of information and set isAllFound to true only if all are found
    if (
        userData.location &&
        userData.mac &&
        userData.IP &&
        userData.date &&
        userData.browser &&
        userData.referrer &&
        userData.screenWidth &&
        userData.screenHeight &&
        userData.userLanguage &&
        userData.userCookie &&
        userData.userTimezone && !userData.isAutomation && !userData.isHeadless
    ) {
        userData.isAllFound = true;
    }

    // console.log(userData);

    return userData;
};


async function getLocation(): Promise<{ latitude: number; longitude: number }> {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => {
                    console.warn('Failed to get location');
                    reject(error);
                },
                { enableHighAccuracy: true }
            );
        } else {
            // console.log('Geolocation not supported');
            reject('Geolocation not supported');
        }
    });
}


function detectAutomation(): boolean {
    const userAgent = navigator.userAgent;
    return userAgent.includes('Selenium') || userAgent.includes('WebDriver');
}

function detectHeadless(): boolean {
    const customWindow = window as CustomWindow;
    return ( customWindow.webdriver || (customWindow.chrome && customWindow.chrome.webstore) ) || false;
}


async function getPublicIPAddress(): Promise<string|undefined> {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        // console.error('Failed to retrieve IP address:', error);
        return undefined;
    }
}



const getUA = (): string => {
    let device: string = "Unknown";
    const ua: { [key: string]: RegExp } = {
        "Generic Linux": /Linux/i,
        "Android": /Android/i,
        "BlackBerry": /BlackBerry/i,
        "Bluebird": /EF500/i,
        "Chrome OS": /CrOS/i,
        "Datalogic": /DL-AXIS/i,
        "Honeywell": /CT50/i,
        "iPad": /iPad/i,
        "iPhone": /iPhone/i,
        "iPod": /iPod/i,
        "macOS": /Macintosh/i,
        "Windows": /IEMobile|Windows/i,
        "Zebra": /TC70|TC55/i,
    };

    Object.keys(ua).forEach((v: string) => {
        if (navigator.userAgent.match(ua[v])) {
            device = v;
        }
    });

    return device;
};

