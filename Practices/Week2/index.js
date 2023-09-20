let name = "TESTING"

let course =
{
    name: "BTI325",
    program: "BSD",
    numofstudents: 33,
    location:
    {
        campus: "Newnham",
        address: "Paradise"
    },

    getName:function()
    {
        return "Course Name: " + this.name;
    },

    outputNameDelay: function(as)
    {
        let that = this
        console.log("Testing " + this.name)
        setTimeout(function()
        {
            console.log(that.name);
        }, as)
    }
}

course.name = "NEW COURSE"

console.log(course.name);  //BTI325

