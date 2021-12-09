function course()
{
    this.coursename="CSA前端培训";
    this.semester=2;
}

function student(name,age,gender)
    {
        course.call(this)
        this.name=name;
        this.age=age;
        this.gender=gender;
        var that = this;
        this.moreinfo=function(){
            var	detail=function(){
                console.log(that.gender);
            }
            detail();
            // console.log(this.gender);
        }
    }
    
    var student1 = new student("小明",18,"男");
    console.log(student1.coursename,student1.semester); //课程名字和第几期
    student1.moreinfo();//你的性别