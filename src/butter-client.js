import Butter from 'buttercms'

const butter = Butter('4c7deb91b8224ab9d08d4b7797f19b55e78580e7')

//get data of clients from CMS
export function getClientsData(successCallback, name) {
    butter.page.retrieve("*", "clients")
        .then(resp => {
            console.log(resp.data.data);
            const object = resp.data.data.fields;
            successCallback(prev => {
                return {...prev, [name]: object}
            })
        })
        .catch(function (resp) {
            console.log(resp)
        });
}

export function getFeatureData(successCallback, name) {
    butter.page.retrieve("*", "features")
        .then(resp => {
            console.log(resp.data.data);
            const object = resp.data.data.fields;
            successCallback(prev => {
                return {...prev, [name]: object}
            })
        })
        .catch(function (resp) {
            console.log(resp)
        });
}

export function getFooterData(successCallback, name) {
    butter.page.retrieve("*", "footer")
        .then(resp => {
            console.log(resp.data.data);
            const object = resp.data.data.fields;
            successCallback(prev => {
                return {...prev, [name]: object}
            })
        })
        .catch(function (resp) {
            console.log(resp)
        });
}

export function getHeaderData(successCallback, name) {
    butter.page.retrieve("*", "header")
        .then(resp => {
            console.log(resp.data.data);
            const object = resp.data.data.fields;
            successCallback(prev => {
                return {...prev, [name]: object}
            })
        })
        .catch(function (resp) {
            console.log(resp)
        });
}

export function getHeroData(successCallback, name) {
    butter.page.retrieve("*", "hero")
        .then(resp => {
            console.log(resp.data.data);
            const object = resp.data.data.fields;
            successCallback(prev => {
                return {...prev, [name]: object}
            })
        })
        .catch(function (resp) {
            console.log(resp)
        });
}

export default butter;