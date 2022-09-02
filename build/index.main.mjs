// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Digest;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0]);
  const ctc2 = stdlib.T_Digest;
  
  
  const v60 = stdlib.protect(ctc0, interact.amount, 'for Deployer\'s interact field amount');
  const v61 = stdlib.protect(ctc0, interact.password, 'for Deployer\'s interact field password');
  
  const v64 = stdlib.digest(ctc1, [v61]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v64, v60],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:34:14:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc0],
    pay: [v60, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v66, v67], secs: v69, time: v68, didSend: v32, from: v65 } = txn1;
      
      sim_r.txns.push({
        amt: v67,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v66, v67], secs: v69, time: v68, didSend: v32, from: v65 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v78], secs: v80, time: v79, didSend: v43, from: v77 } = txn2;
  ;
  const v81 = stdlib.digest(ctc1, [v78]);
  const v82 = stdlib.digestEq(v66, v81);
  stdlib.assert(v82, {
    at: './index.rsh:51:12:application',
    fs: [],
    msg: null,
    who: 'Deployer'
    });
  ;
  return;
  
  
  
  
  };
export async function Receiver(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Receiver expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Receiver expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Digest;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1]);
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v66, v67], secs: v69, time: v68, didSend: v32, from: v65 } = txn1;
  ;
  const v74 = stdlib.protect(ctc1, await interact.obtainPassword(), {
    at: './index.rsh:44:58:application',
    fs: ['at ./index.rsh:42:18:application call to [unknown function] (defined at: ./index.rsh:42:22:function exp)'],
    msg: 'obtainPassword',
    who: 'Receiver'
    });
  const v75 = stdlib.digest(ctc2, [v74]);
  const v76 = stdlib.digestEq(v66, v75);
  stdlib.assert(v76, {
    at: './index.rsh:46:13:application',
    fs: ['at ./index.rsh:42:18:application call to [unknown function] (defined at: ./index.rsh:42:22:function exp)'],
    msg: null,
    who: 'Receiver'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v66, v67, v74],
    evt_cnt: 1,
    funcNum: 1,
    lct: v68,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:49:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v78], secs: v80, time: v79, didSend: v43, from: v77 } = txn2;
      
      ;
      sim_r.txns.push({
        kind: 'from',
        to: v77,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v78], secs: v80, time: v79, didSend: v43, from: v77 } = txn2;
  ;
  const v81 = stdlib.digest(ctc2, [v78]);
  const v82 = stdlib.digestEq(v66, v81);
  stdlib.assert(v82, {
    at: './index.rsh:51:12:application',
    fs: [],
    msg: null,
    who: 'Receiver'
    });
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiADAAEgJgIAAQAiNQAxGEEBFihkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAEgjEkQjNAESRDQESSISTDQCEhFEKWQ1A0k1BRc1/4AE1RUZFDT/FlCwNANXACA0/xYBEkSxIrIBNAMkW7III7IQMQCyB7NCAFBIgaCNBogAtiI0ARJENARJIhJMNAISEURJNQVJVwAgNf8kWzX+gATb8EUPNP9QNP4WULA0/ogAhjT/NP4WUClLAVcAKGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAjE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 40,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v67",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T1",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v67",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T1",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161073f38038061073f833981016040819052610022916101f1565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a1602080820151015161008e90341460076100f9565b60408051808201825260008082526020808301828152858201805151808652905183015182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926100f19260029290910190610122565b505050610286565b8161011e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461012e9061024b565b90600052602060002090601f0160209004810192826101505760008555610196565b82601f1061016957805160ff1916838001178555610196565b82800160010185558215610196579182015b8281111561019657825182559160200191906001019061017b565b506101a29291506101a6565b5090565b5b808211156101a257600081556001016101a7565b604080519081016001600160401b03811182821017156101eb57634e487b7160e01b600052604160045260246000fd5b60405290565b6000818303606081121561020457600080fd5b61020c6101bb565b835181526040601f198301121561022257600080fd5b61022a6101bb565b60208581015182526040909501518582015293810193909352509092915050565b600181811c9082168061025f57607f821691505b6020821081141561028057634e487b7160e01b600052602260045260246000fd5b50919050565b6104aa806102956000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063873779a114610082578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b61004761009036600461036d565b6100b8565b3480156100a157600080fd5b506100aa610255565b604051610064929190610385565b6100c8600160005414600a6102f2565b6100e2813515806100db57506001548235145b600b6102f2565b6000808055600280546100f4906103e2565b80601f0160208091040260200160405190810160405280929190818152602001828054610120906103e2565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b50505050508060200190518101906101859190610417565b6040805133815284356020808301919091528501358183015290519192507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f7225919081900360600190a16101da341560086102f2565b60408051602084810135818301528251808303820181529183019092528051910120815161020a911460096102f2565b6020810151604051339180156108fc02916000818181858888f1935050505015801561023a573d6000803e3d6000fd5b506000808055600181905561025190600290610317565b5050565b60006060600054600280805461026a906103e2565b80601f0160208091040260200160405190810160405280929190818152602001828054610296906103e2565b80156102e35780601f106102b8576101008083540402835291602001916102e3565b820191906000526020600020905b8154815290600101906020018083116102c657829003601f168201915b50505050509050915091509091565b816102515760405163100960cb60e01b81526004810182905260240160405180910390fd5b508054610323906103e2565b6000825580601f10610333575050565b601f0160209004906000526020600020908101906103519190610354565b50565b5b808211156103695760008155600101610355565b5090565b60006040828403121561037f57600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156103b95785810183015185820160600152820161039d565b818111156103cb576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806103f657607f821691505b6020821081141561037f57634e487b7160e01b600052602260045260246000fd5b60006040828403121561042957600080fd5b6040516040810181811067ffffffffffffffff8211171561045a57634e487b7160e01b600052604160045260246000fd5b60405282518152602092830151928101929092525091905056fea26469706673582212209edb3d5591c6b0206e78e4e12b1e61bf565d3e4c760cc68cf473510b86f761bd64736f6c634300080c0033`,
  BytecodeLen: 1855,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:37:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:55:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Deployer": Deployer,
  "Receiver": Receiver
  };
export const _APIs = {
  };
