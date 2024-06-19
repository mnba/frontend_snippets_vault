class SomeClass {
    init() {
        print("Init is called")
    }
    deinit {
        print("Deinit is called")
    }/*
    func init(t:Int)->Int{
        ;//pass
    } */
    //func `init`(t:Int)->Int{
    func thirtythree(t:Int)->Int{
        //; //empty statements ";" not allowed
        print("`init`() called", Float(t)*3.3);
        // https://stackoverflow.com/questions/24029917/convert-float-to-int-in-swift
        //ceil
        return Int( (Float(t)*3.3).rounded(.up) )
    }
    
}
print("start")
var s: SomeClass? = SomeClass()
print("some processing...")
let res33 = s?.thirtythree(t:33)
print(res33)
s = nil
print("end.")