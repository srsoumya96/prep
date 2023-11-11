// https://leetcode.com/problems/add-two-numbers/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let max = Math.max(getCount(l1), getCount(l2));
    console.log(max);
    let res = [];
    let c = 0;
    for(let i=0; i<max; i++) {
        let curr1 = l1.val, curr2 = l2.val;
        console.log(curr1, "", curr2);
        let sum = curr1 + curr2 + c;

        let dig = sum % 10;
        res.push(dig);
        console.log(res);
        c = Math.floor(sum / 10);
        if(l1.next) l1 = l1.next; else l1 = { val : 0 };
        if(l2.next) l2 = l2.next; else l2 = { val : 0 };
    }

    if(c !== 0) {
        res.push(c);
    }

    let result = res.reverse().reduce((acc, curr) => {
        if (acc == null) {
            acc = new ListNode(curr);

        } else {
            acc = new ListNode(curr, acc);
        }
        return acc;
    }, null);
    return result;
};

function getCount(list) 
{
    let count = 1;
    while(list.next) {
        count++;
        list = list.next;
    }
    return count;
}
