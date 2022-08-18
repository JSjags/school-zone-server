staffs: [{
    name: {
        type: String,
        required: [true, "Please input name"]
    },
    age: {
        type: Number,
        required: [true, "Please input age"]
    },
    typeOfStaff: {
        type: String,
        required: [true, "Please specify staff's role"]
    },
    office: {
        type: String,
        required: [true, "Please input staff,s office"]
    },
    height: {
        type: String,
        required: [true, "Please input height"]
    },
    weight: {
        type: String,
        required: [true, "Please input height"]
    },
    avatar: {
        type: String,
        required: [true, "Please upload photo"]
    },
    salary: {
        type: number,
        required: [true, "Please input salary amount"]
    },
    nationality: {
        type: String,
        required: [true, "Please input nationality"]
    },
}]
