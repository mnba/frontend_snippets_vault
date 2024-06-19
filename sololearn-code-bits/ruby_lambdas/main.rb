talk = lambda {puts "Hi!-1"}
talk.call

talk2 = ->() {puts "Hello!-2"}
talk2.call

=begin
 NB:
Do not confuse this Ruby lambda: 
 ->(args..) {...code...}
 with JavaScript lambda:
 (args..) => {...code...}
 
Here:
 args..     - is 0 or more argunents
 ...code... - are code instructions 
=end