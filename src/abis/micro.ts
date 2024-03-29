﻿export const micro3ABI = [
    {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        inputs: [],
        name: 'Canceled',
        type: 'error',
    },
    {
        inputs: [],
        name: 'InvalidSaleDetail',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'InvalidToken',
        type: 'error',
    },
    {
        inputs: [],
        name: 'IsNotBridge',
        type: 'error',
    },
    {
        inputs: [],
        name: 'PaymentFailed',
        type: 'error',
    },
    {
        inputs: [],
        name: 'PurchaseTooManyForAddress',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'correctPrice',
                type: 'uint256',
            },
        ],
        name: 'PurchaseWrongPrice',
        type: 'error',
    },
    {
        inputs: [],
        name: 'SaleCanNotUpdate',
        type: 'error',
    },
    {
        inputs: [],
        name: 'SaleInactive',
        type: 'error',
    },
    {
        inputs: [],
        name: 'SaleIsNotEnded',
        type: 'error',
    },
    {
        inputs: [],
        name: 'SoldOut',
        type: 'error',
    },
    {
        inputs: [],
        name: 'Unauthorized',
        type: 'error',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'approved',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'Approval',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'operator',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'bool',
                name: 'approved',
                type: 'bool',
            },
        ],
        name: 'ApprovalForAll',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: '_to',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: '_dstChainId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: '_tokenId',
                type: 'uint256',
            },
        ],
        name: 'BridgeIn',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: '_from',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: '_dstChainId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: '_tokenId',
                type: 'uint256',
            },
        ],
        name: 'BridgeOut',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'lastTimeUpdated',
                type: 'uint256',
            },
        ],
        name: 'CancelSaleEdition',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'MicroMintFeeWei',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'MicroFeeRecipient',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'bool',
                name: 'success',
                type: 'bool',
            },
        ],
        name: 'FeePayout',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'fundsRecipient',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'fund',
                type: 'uint256',
            },
        ],
        name: 'FundsWithdrawn',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'editionSize',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'timeEnd',
                type: 'uint256',
            },
        ],
        name: 'OpenMintFinalized',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'lastTimeUpdated',
                type: 'uint256',
            },
        ],
        name: 'PublicSaleCollection',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'quantity',
                type: 'uint256',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'price',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'firstMintedTokenId',
                type: 'uint256',
            },
        ],
        name: 'Purchase',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'fundsRecipient',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'fund',
                type: 'uint256',
            },
        ],
        name: 'SharingWithdrawn',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'Transfer',
        type: 'event',
    },
    {
        inputs: [],
        name: 'VERSION',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'recipient',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'quantity',
                type: 'uint256',
            },
        ],
        name: 'adminMint',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'approve',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
        ],
        name: 'balanceOf',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'baseURI',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_toAddress',
                type: 'address',
            },
            {
                internalType: 'uint64',
                name: '_dstChainId',
                type: 'uint64',
            },
            {
                internalType: 'uint256',
                name: '_tokenId',
                type: 'uint256',
            },
        ],
        name: 'bridgeIn',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_from',
                type: 'address',
            },
            {
                internalType: 'uint64',
                name: '_dstChainId',
                type: 'uint64',
            },
            {
                internalType: 'uint256',
                name: '_tokenId',
                type: 'uint256',
            },
        ],
        name: 'bridgeOut',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'cancelSaleEdition',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'finalizeOpenEdition',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'getApproved',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'quantity',
                type: 'uint256',
            },
        ],
        name: 'getMicroFeeUsd',
        outputs: [
            {
                internalType: 'uint256',
                name: 'fee',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'quantity',
                type: 'uint256',
            },
        ],
        name: 'getMicroFeeWei',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: 'initPayload',
                type: 'bytes',
            },
        ],
        name: 'init',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'operator',
                type: 'address',
            },
        ],
        name: 'isApprovedForAll',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'microManager',
        outputs: [
            {
                internalType: 'contract IMicroManager',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'name',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'notRevealedUri',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'ownerOf',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'quantity',
                type: 'uint256',
            },
        ],
        name: 'purchase',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
            {
                internalType: 'bytes',
                name: '_data',
                type: 'bytes',
            },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'saleConfig',
        outputs: [
            {
                internalType: 'uint64',
                name: 'editionSize',
                type: 'uint64',
            },
            {
                internalType: 'uint16',
                name: 'profitSharing',
                type: 'uint16',
            },
            {
                internalType: 'address payable',
                name: 'fundsRecipient',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'publicSalePrice',
                type: 'uint256',
            },
            {
                internalType: 'uint32',
                name: 'maxSalePurchasePerAddress',
                type: 'uint32',
            },
            {
                internalType: 'uint64',
                name: 'publicSaleStart',
                type: 'uint64',
            },
            {
                internalType: 'uint64',
                name: 'publicSaleEnd',
                type: 'uint64',
            },
            {
                internalType: 'bool',
                name: 'cancelable',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'operator',
                type: 'address',
            },
            {
                internalType: 'bool',
                name: 'approved',
                type: 'bool',
            },
        ],
        name: 'setApprovalForAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '_newBaseURI',
                type: 'string',
            },
        ],
        name: 'setBaseURI',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '_notRevealedURI',
                type: 'string',
            },
        ],
        name: 'setNotRevealedURI',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: 'initPayload',
                type: 'bytes',
            },
        ],
        name: 'setSaleDetail',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes4',
                name: 'interfaceId',
                type: 'bytes4',
            },
        ],
        name: 'supportsInterface',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'symbol',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'index',
                type: 'uint256',
            },
        ],
        name: 'tokenByIndex',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'index',
                type: 'uint256',
            },
        ],
        name: 'tokenOfOwnerByIndex',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'tokenURI',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: 'totalMintsByAddress',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'totalSupply',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'transferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
];
