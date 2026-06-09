export interface CuratedProblem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  link: string;
}

export interface CuratedTopic {
  id: string;
  name: string;
  problems: CuratedProblem[];
}

export interface CuratedStep {
  id: string;
  name: string;
  topics: CuratedTopic[];
}

export const STRIVER_A2Z_SHEET: CuratedStep[] = [
  {
    id: 'step1',
    name: 'Step 1: Learn the basics',
    topics: [
      {
        id: 'step1-1',
        name: 'Things to Know in C++/Java/Python',
        problems: [
          { id: '1-1-1', title: 'User Input / Output', difficulty: 'Easy', link: 'https://practice.geeksforgeeks.org/problems/search-query-auto-complete/0' },
          { id: '1-1-2', title: 'Data Types', difficulty: 'Easy', link: 'https://practice.geeksforgeeks.org/problems/data-type-1666706751/1' },
          { id: '1-1-3', title: 'If Else statements', difficulty: 'Easy', link: 'https://practice.geeksforgeeks.org/problems/java-if-else-decision-making0924/0' }
        ]
      },
      {
        id: 'step1-2',
        name: 'Build-up Logical Thinking',
        problems: [
          { id: '1-2-1', title: 'Pattern 1', difficulty: 'Easy', link: 'https://practice.geeksforgeeks.org/problems/square-pattern/1' },
          { id: '1-2-2', title: 'Pattern 2', difficulty: 'Easy', link: 'https://practice.geeksforgeeks.org/problems/right-triangle/1' },
          { id: '1-2-3', title: 'Pattern 3', difficulty: 'Easy', link: 'https://practice.geeksforgeeks.org/problems/triangle-number/1' }
        ]
      },
      {
        id: 'step1-4',
        name: 'Know Basic Math',
        problems: [
          { id: '1-4-1', title: 'Count Digits', difficulty: 'Easy', link: 'https://practice.geeksforgeeks.org/problems/count-digits5716/1' },
          { id: '1-4-2', title: 'Reverse Integer', difficulty: 'Medium', link: 'https://leetcode.com/problems/reverse-integer/' },
          { id: '1-4-3', title: 'Palindrome Number', difficulty: 'Easy', link: 'https://leetcode.com/problems/palindrome-number/' },
          { id: '1-4-4', title: 'GCD or HCF', difficulty: 'Easy', link: 'https://practice.geeksforgeeks.org/problems/lcm-and-gcd4516/1' }
        ]
      }
    ]
  },
  {
    id: 'step3',
    name: 'Step 3: Solve Problems on Arrays',
    topics: [
      {
        id: 'step3-1',
        name: 'Easy',
        problems: [
          { id: '3-1-1', title: 'Largest Element in Array', difficulty: 'Easy', link: 'https://practice.geeksforgeeks.org/problems/largest-element-in-array/1' },
          { id: '3-1-2', title: 'Check if Array is Sorted', difficulty: 'Easy', link: 'https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/' },
          { id: '3-1-3', title: 'Remove Duplicates', difficulty: 'Easy', link: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/' },
          { id: '3-1-4', title: 'Missing Number', difficulty: 'Easy', link: 'https://leetcode.com/problems/missing-number/' },
          { id: '3-1-5', title: 'Max Consecutive Ones', difficulty: 'Easy', link: 'https://leetcode.com/problems/max-consecutive-ones/' },
          { id: '3-1-6', title: 'Single Number', difficulty: 'Easy', link: 'https://leetcode.com/problems/single-number/' }
        ]
      },
      {
        id: 'step3-2',
        name: 'Medium',
        problems: [
          { id: '3-2-1', title: 'Two Sum', difficulty: 'Easy', link: 'https://leetcode.com/problems/two-sum/' },
          { id: '3-2-2', title: 'Sort Colors', difficulty: 'Medium', link: 'https://leetcode.com/problems/sort-colors/' },
          { id: '3-2-3', title: 'Majority Element', difficulty: 'Easy', link: 'https://leetcode.com/problems/majority-element/' },
          { id: '3-2-4', title: 'Maximum Subarray', difficulty: 'Medium', link: 'https://leetcode.com/problems/maximum-subarray/' },
          { id: '3-2-5', title: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/' },
          { id: '3-2-6', title: 'Rearrange Array Elements by Sign', difficulty: 'Medium', link: 'https://leetcode.com/problems/rearrange-array-elements-by-sign/' },
          { id: '3-2-7', title: 'Next Permutation', difficulty: 'Medium', link: 'https://leetcode.com/problems/next-permutation/' },
          { id: '3-2-8', title: 'Set Matrix Zeroes', difficulty: 'Medium', link: 'https://leetcode.com/problems/set-matrix-zeroes/' },
          { id: '3-2-9', title: 'Rotate Image', difficulty: 'Medium', link: 'https://leetcode.com/problems/rotate-image/' },
          { id: '3-2-10', title: 'Spiral Matrix', difficulty: 'Medium', link: 'https://leetcode.com/problems/spiral-matrix/' }
        ]
      },
      {
        id: 'step3-3',
        name: 'Hard',
        problems: [
          { id: '3-3-1', title: 'Pascal\'s Triangle', difficulty: 'Easy', link: 'https://leetcode.com/problems/pascals-triangle/' },
          { id: '3-3-2', title: 'Majority Element II', difficulty: 'Medium', link: 'https://leetcode.com/problems/majority-element-ii/' },
          { id: '3-3-3', title: '3Sum', difficulty: 'Medium', link: 'https://leetcode.com/problems/3sum/' },
          { id: '3-3-4', title: '4Sum', difficulty: 'Medium', link: 'https://leetcode.com/problems/4sum/' },
          { id: '3-3-5', title: 'Largest subarray with 0 sum', difficulty: 'Medium', link: 'https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1' },
          { id: '3-3-6', title: 'Merge Intervals', difficulty: 'Medium', link: 'https://leetcode.com/problems/merge-intervals/' },
          { id: '3-3-7', title: 'Merge Sorted Array', difficulty: 'Easy', link: 'https://leetcode.com/problems/merge-sorted-array/' },
          { id: '3-3-8', title: 'Reverse Pairs', difficulty: 'Hard', link: 'https://leetcode.com/problems/reverse-pairs/' }
        ]
      }
    ]
  },
  {
    id: 'step4',
    name: 'Step 4: Binary Search',
    topics: [
      {
        id: 'step4-1',
        name: 'BS on 1D Arrays',
        problems: [
          { id: '4-1-1', title: 'Binary Search', difficulty: 'Easy', link: 'https://leetcode.com/problems/binary-search/' },
          { id: '4-1-2', title: 'Search Insert Position', difficulty: 'Easy', link: 'https://leetcode.com/problems/search-insert-position/' },
          { id: '4-1-3', title: 'Find First and Last Position of Element in Sorted Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/' },
          { id: '4-1-4', title: 'Search in Rotated Sorted Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/' },
          { id: '4-1-5', title: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/' },
          { id: '4-1-6', title: 'Single Element in a Sorted Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/single-element-in-a-sorted-array/' },
          { id: '4-1-7', title: 'Find Peak Element', difficulty: 'Medium', link: 'https://leetcode.com/problems/find-peak-element/' }
        ]
      },
      {
        id: 'step4-2',
        name: 'BS on Answers',
        problems: [
          { id: '4-2-1', title: 'Koko Eating Bananas', difficulty: 'Medium', link: 'https://leetcode.com/problems/koko-eating-bananas/' },
          { id: '4-2-2', title: 'Minimum Number of Days to Make m Bouquets', difficulty: 'Medium', link: 'https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/' },
          { id: '4-2-3', title: 'Find the Smallest Divisor Given a Threshold', difficulty: 'Medium', link: 'https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/' },
          { id: '4-2-4', title: 'Capacity To Ship Packages Within D Days', difficulty: 'Medium', link: 'https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/' },
          { id: '4-2-5', title: 'Kth Missing Positive Number', difficulty: 'Easy', link: 'https://leetcode.com/problems/kth-missing-positive-number/' },
          { id: '4-2-6', title: 'Split Array Largest Sum', difficulty: 'Hard', link: 'https://leetcode.com/problems/split-array-largest-sum/' }
        ]
      }
    ]
  },
  {
    id: 'step5',
    name: 'Step 5: Strings',
    topics: [
      {
        id: 'step5-1',
        name: 'Basic and Medium',
        problems: [
          { id: '5-1-1', title: 'Remove Outermost Parentheses', difficulty: 'Easy', link: 'https://leetcode.com/problems/remove-outermost-parentheses/' },
          { id: '5-1-2', title: 'Reverse Words in a String', difficulty: 'Medium', link: 'https://leetcode.com/problems/reverse-words-in-a-string/' },
          { id: '5-1-3', title: 'Largest Odd Number in String', difficulty: 'Easy', link: 'https://leetcode.com/problems/largest-odd-number-in-string/' },
          { id: '5-1-4', title: 'Longest Common Prefix', difficulty: 'Easy', link: 'https://leetcode.com/problems/longest-common-prefix/' },
          { id: '5-1-5', title: 'Isomorphic Strings', difficulty: 'Easy', link: 'https://leetcode.com/problems/isomorphic-strings/' },
          { id: '5-1-6', title: 'Valid Anagram', difficulty: 'Easy', link: 'https://leetcode.com/problems/valid-anagram/' }
        ]
      }
    ]
  },
  {
    id: 'step6',
    name: 'Step 6: Linked List',
    topics: [
      {
        id: 'step6-1',
        name: '1D Linked List',
        problems: [
          { id: '6-1-1', title: 'Middle of the Linked List', difficulty: 'Easy', link: 'https://leetcode.com/problems/middle-of-the-linked-list/' },
          { id: '6-1-2', title: 'Reverse Linked List', difficulty: 'Easy', link: 'https://leetcode.com/problems/reverse-linked-list/' },
          { id: '6-1-3', title: 'Linked List Cycle', difficulty: 'Easy', link: 'https://leetcode.com/problems/linked-list-cycle/' }
        ]
      },
      {
        id: 'step6-3',
        name: 'Medium Problems of LL',
        problems: [
          { id: '6-3-1', title: 'Palindrome Linked List', difficulty: 'Easy', link: 'https://leetcode.com/problems/palindrome-linked-list/' },
          { id: '6-3-2', title: 'Odd Even Linked List', difficulty: 'Medium', link: 'https://leetcode.com/problems/odd-even-linked-list/' },
          { id: '6-3-3', title: 'Remove Nth Node From End of List', difficulty: 'Medium', link: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/' },
          { id: '6-3-4', title: 'Delete the Middle Node of a Linked List', difficulty: 'Medium', link: 'https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/' },
          { id: '6-3-5', title: 'Sort List', difficulty: 'Medium', link: 'https://leetcode.com/problems/sort-list/' },
          { id: '6-3-6', title: 'Intersection of Two Linked Lists', difficulty: 'Easy', link: 'https://leetcode.com/problems/intersection-of-two-linked-lists/' },
          { id: '6-3-7', title: 'Add Two Numbers', difficulty: 'Medium', link: 'https://leetcode.com/problems/add-two-numbers/' }
        ]
      }
    ]
  },
  {
    id: 'step13',
    name: 'Step 13: Binary Trees',
    topics: [
      {
        id: 'step13-1',
        name: 'Traversals',
        problems: [
          { id: '13-1-1', title: 'Binary Tree Preorder Traversal', difficulty: 'Easy', link: 'https://leetcode.com/problems/binary-tree-preorder-traversal/' },
          { id: '13-1-2', title: 'Binary Tree Inorder Traversal', difficulty: 'Easy', link: 'https://leetcode.com/problems/binary-tree-inorder-traversal/' },
          { id: '13-1-3', title: 'Binary Tree Postorder Traversal', difficulty: 'Easy', link: 'https://leetcode.com/problems/binary-tree-postorder-traversal/' },
          { id: '13-1-4', title: 'Binary Tree Level Order Traversal', difficulty: 'Medium', link: 'https://leetcode.com/problems/binary-tree-level-order-traversal/' }
        ]
      },
      {
        id: 'step13-2',
        name: 'Medium Problems',
        problems: [
          { id: '13-2-1', title: 'Maximum Depth of Binary Tree', difficulty: 'Easy', link: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/' },
          { id: '13-2-2', title: 'Balanced Binary Tree', difficulty: 'Easy', link: 'https://leetcode.com/problems/balanced-binary-tree/' },
          { id: '13-2-3', title: 'Diameter of Binary Tree', difficulty: 'Easy', link: 'https://leetcode.com/problems/diameter-of-binary-tree/' },
          { id: '13-2-4', title: 'Maximum Path Sum', difficulty: 'Hard', link: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/' },
          { id: '13-2-5', title: 'Same Tree', difficulty: 'Easy', link: 'https://leetcode.com/problems/same-tree/' },
          { id: '13-2-6', title: 'Symmetric Tree', difficulty: 'Easy', link: 'https://leetcode.com/problems/symmetric-tree/' }
        ]
      }
    ]
  },
  {
    id: 'step15',
    name: 'Step 15: Graphs',
    topics: [
      {
        id: 'step15-2',
        name: 'BFS/DFS',
        problems: [
          { id: '15-2-1', title: 'Number of Provinces', difficulty: 'Medium', link: 'https://leetcode.com/problems/number-of-provinces/' },
          { id: '15-2-2', title: 'Rotting Oranges', difficulty: 'Medium', link: 'https://leetcode.com/problems/rotting-oranges/' },
          { id: '15-2-3', title: 'Flood Fill', difficulty: 'Easy', link: 'https://leetcode.com/problems/flood-fill/' },
          { id: '15-2-4', title: '01 Matrix', difficulty: 'Medium', link: 'https://leetcode.com/problems/01-matrix/' },
          { id: '15-2-5', title: 'Surrounded Regions', difficulty: 'Medium', link: 'https://leetcode.com/problems/surrounded-regions/' },
          { id: '15-2-6', title: 'Number of Enclaves', difficulty: 'Medium', link: 'https://leetcode.com/problems/number-of-enclaves/' },
          { id: '15-2-7', title: 'Word Ladder', difficulty: 'Hard', link: 'https://leetcode.com/problems/word-ladder/' }
        ]
      }
    ]
  },
  {
    id: 'step16',
    name: 'Step 16: Dynamic Programming',
    topics: [
      {
        id: 'step16-2',
        name: '1D DP',
        problems: [
          { id: '16-2-1', title: 'Climbing Stairs', difficulty: 'Easy', link: 'https://leetcode.com/problems/climbing-stairs/' },
          { id: '16-2-2', title: 'Frog Jump', difficulty: 'Easy', link: 'https://www.codingninjas.com/codestudio/problems/frog-jump_3621012' },
          { id: '16-2-3', title: 'House Robber', difficulty: 'Medium', link: 'https://leetcode.com/problems/house-robber/' },
          { id: '16-2-4', title: 'House Robber II', difficulty: 'Medium', link: 'https://leetcode.com/problems/house-robber-ii/' }
        ]
      },
      {
        id: 'step16-3',
        name: '2D/3D DP and DP on Grids',
        problems: [
          { id: '16-3-1', title: 'Unique Paths', difficulty: 'Medium', link: 'https://leetcode.com/problems/unique-paths/' },
          { id: '16-3-2', title: 'Unique Paths II', difficulty: 'Medium', link: 'https://leetcode.com/problems/unique-paths-ii/' },
          { id: '16-3-3', title: 'Minimum Path Sum', difficulty: 'Medium', link: 'https://leetcode.com/problems/minimum-path-sum/' },
          { id: '16-3-4', title: 'Triangle', difficulty: 'Medium', link: 'https://leetcode.com/problems/triangle/' }
        ]
      }
    ]
  }
];
