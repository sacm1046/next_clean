const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            value: "chao"
        },
        actions: {
            test: (value) => {
                setStore({
                    value: value
                })
            }
        }
    }
}
export default getState;