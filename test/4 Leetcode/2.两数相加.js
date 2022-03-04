var addTwoNumbers = function (l1, l2) {
    let head = null;
    let l3 = null;
    let val = 0;
    while (l1 || l2) {
        const node = new ListNode();
        if (l1 && !l2) {
            const sum = l1.val + val;
            node.val = sum % 10;
            val = Math.floor(sum / 10);
        } else if (!l1 && l2) {
            const sum = l2.val + val;
            node.val = sum % 10;
            val = Math.floor(sum / 10);
        } else {
            const sum = l1.val + l2.val + val;
            node.val = sum % 10;
            val = Math.floor(sum / 10);
        }
        if (!head) {
            head = node;
            l3 = head;
        } else {
            l3.next = node;
        }
    }
    if (val !== 0) {
        const node = new ListNode();
        node.val = val;
        l3.next = node;
    }
    return head;
};
