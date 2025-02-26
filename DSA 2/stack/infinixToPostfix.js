/*
Why postfix representation of the expression? 
The compiler scans the expression either from left to right or from right to left. 
Consider the expression: a + b * c + d

The compiler first scans the expression to evaluate the expression b * c, then again scans the expression to add a to it. 
The result is then added to d after another scan. 
The repeated scanning makes it very inefficient. Infix expressions are easily readable and solvable by humans whereas the computer cannot differentiate the operators and parenthesis easily so, it is better to convert the expression to postfix(or prefix) form before evaluation.

The corresponding expression in postfix form is abc*+d+. The postfix expressions can be evaluated easily using a stack. 

How to convert 

Scan the infix expression from left to right. 
If the scanned character is an operand, put it in the postfix expression. 
Otherwise, do the following
If the precedence of the current scanned operator is higher than the precedence of the operator on top of the stack, or if the stack is empty, or if the stack contains a ‘(‘, then push the current operator onto the stack.
Else, pop all operators from the stack that have precedence higher than or equal to that of the current operator. After that push the current operator onto the stack.
If the scanned character is a ‘(‘, push it to the stack. 
If the scanned character is a ‘)’, pop the stack and output it until a ‘(‘ is encountered, and discard both the parenthesis. 
Repeat steps 2-5 until the infix expression is scanned. 
Once the scanning is over, Pop the stack and add the operators in the postfix expression until it is not empty.
Finally, print the postfix expression.
*/

function prec(c){
    if(c == "^"){
        return 3
    }else if(c=='/' || c == '*'){
        return 2
    }else if(c=='+'||c=='-'){
        return 1
    }else{
        return -1
    }
}

function infinixToPostfix(s){
    let st = []
    let  result = ''
    for(let i = 0 ; i<s.length;i++){
        let c = s[i]
        if(c>='a'&& c<='z' || c>='A'&&c<='Z' || c>='0' && c<='9'){
            result+=c
        }else if (c == '('){
            st.push(c)
        }else if(c == ')'){
            while(st[st.length-1]!='('){
                result+=st.pop()
            }
            st.pop()
        }else{
            while(st.length && prec(c)<prec(st[st.length-1])||prec(c)==prec(st[st.length-1])){
                result+=st.pop()
            }
            st.push(c)
        }

    }
            while(st.length){
            result+=st.pop()
        }
    console.log(result)
}

str = 'a+b*(c^d-e)^(f+g*h)-i'
infinixToPostfix(str)



