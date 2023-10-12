const express = require('express');
const puppeteer = require('puppeteer');
const axios = require("axios")
const app = express();
const PORT = 4000;

const sendMails = async () => {
    const DATA_POST = {
        data: `EL BOTON DE TAYLOR CAMBIO GORDO BALA!!!!! https://www.allaccess.com.ar/event/taylor-swift-the-eras-tour`,
        toEmails: "lucasfede2010@gmail.com",
        affair: "EL BOTON DE TAYLOR CAMBIO GORDO BALA!!!!!"
    }

    const HEADERS = {
        "Content-Type": "text/plain;charset=utf-8",
    }

    await axios.post('https://script.google.com/macros/s/AKfycbyrd6XCkI0vQycQvrpWCucUdAAlR2tR7hqoTfLW1PxUdirRfk8utsH8l0bYTrO-iChE/exec', DATA_POST, { headers: HEADERS })
        .then(function (response) {
        })
        .catch(function (error) {
        });
}

async function monitorDiv() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.allaccess.com.ar/event/taylor-swift-the-eras-tour');

    try {
        await page.waitForSelector('#picker', { timeout: 0 });
        console.log('Elemento <div> encontrado, iniciando monitoreo...');

        while (true) {
            await page.waitForTimeout(5000);
            const hasDivChanged = await page.evaluate(selector => {
                const div = document.querySelector(selector);
                if (div) {
                    return new Promise(resolve => {
                        const observer = new MutationObserver(mutationsList => {
                            for (let mutation of mutationsList) {
                                if (mutation.type === 'childList') {
                                    resolve(true);
                                }
                            }
                        });
                        observer.observe(div, { childList: true, subtree: true });
                    });
                }
                return false;
            }, '#picker')

            if (hasDivChanged) {
                console.log('El elemento <div> o sus hijos han cambiado.');
                await sendMails();
            }
        }
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await browser.close();
    }
}

async function monitorDiv2() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.allaccess.com.ar/event/taylor-swift-the-eras-tour');

    try {
        await page.waitForSelector('#picker-bar', { timeout: 0 });
        console.log('Elemento <div> encontrado, iniciando monitoreo...');

        while (true) {
            await page.waitForTimeout(5000);
            const hasDivChanged = await page.evaluate(selector => {
                const div = document.querySelector(selector);
                if (div) {
                    return new Promise(resolve => {
                        const observer = new MutationObserver(mutationsList => {
                            for (let mutation of mutationsList) {
                                if (mutation.type === 'childList') {
                                    resolve(true);
                                }
                            }
                        });
                        observer.observe(div, { childList: true, subtree: true });
                    });
                }
                return false;
            }, '#picker-bar')

            if (hasDivChanged) {
                console.log('El elemento <div> o sus hijos han cambiado.');
                await sendMails();
            }
        }
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await browser.close();
    }
}

async function monitorDiv3() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.allaccess.com.ar/event/taylor-swift-the-eras-tour');

    try {
        await page.waitForSelector('.container', { timeout: 0 });
        console.log('Elemento <div> encontrado, iniciando monitoreo...');

        while (true) {
            await page.waitForTimeout(5000);
            const hasDivChanged = await page.evaluate(selector => {
                const div = document.querySelector(selector);
                if (div) {
                    return new Promise(resolve => {
                        const observer = new MutationObserver(mutationsList => {
                            for (let mutation of mutationsList) {
                                if (mutation.type === 'childList') {
                                    resolve(true);
                                }
                            }
                        });
                        observer.observe(div, { childList: true, subtree: true });
                    });
                }
                return false;
            }, '.container')

            if (hasDivChanged) {
                console.log('El elemento <div> o sus hijos han cambiado.');
                await sendMails();
            }
        }
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await browser.close();
    }
}

async function monitorDiv4() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.allaccess.com.ar/event/taylor-swift-the-eras-tour');

    try {
        await page.waitForSelector('.event_info', { timeout: 0 });
        console.log('Elemento <div> encontrado, iniciando monitoreo...');

        while (true) {
            await page.waitForTimeout(5000);
            const hasDivChanged = await page.evaluate(selector => {
                const div = document.querySelector(selector);
                if (div) {
                    return new Promise(resolve => {
                        const observer = new MutationObserver(mutationsList => {
                            for (let mutation of mutationsList) {
                                if (mutation.type === 'childList') {
                                    resolve(true);
                                }
                            }
                        });
                        observer.observe(div, { childList: true, subtree: true });
                    });
                }
                return false;
            }, '.event_info')

            if (hasDivChanged) {
                console.log('El elemento <div> o sus hijos han cambiado.');
                await sendMails();
            }
        }
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await browser.close();
    }
}

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
    monitorDiv();
    monitorDiv2()
    monitorDiv3()
    monitorDiv4()
});