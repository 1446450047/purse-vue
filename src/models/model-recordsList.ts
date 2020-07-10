const recordsList = "recordsList";
const modelRecordsList = {
    read() {
        return  JSON.parse(window.localStorage.getItem(recordsList) || "[]") as RecordItem[];
    },
    write(data: RecordItem[] | RecordItem) {
        window.localStorage.setItem("recordsList", JSON.stringify(data));
    },
    clone(record: RecordItem){
       return  JSON.parse(JSON.stringify(record));
    }
};
export {modelRecordsList}