'use strict';

module.exports = {
  TXHEX: [
    [ // From Mainnet Block 100014
      // From: http://localhost:3001/insight-api-rapture/rawtx/c9f1852c3be1b5262d1be924c2065e50531ec6727d2f9cadf2d02fe9f686a202
      "0100000002ea1a3ca543ca1d2d1047f8d5e3f6f6f678fb17769ed750c47d7081d9809c7686130000006b48304502206e020f5239f5beb8d5c5c3bd23fee3576e6fe679628a13393e97b15949ab245102210083d5d9401c29f305bfcfeb8d3d7120bb55d875c28765ee519de0ca8a0b9692ba012102cbf00f5ee1ebdcfc372972872c853b2cb7fe901a6d718316821d799400fedf86ffffffff1f99c924e0088e38a7540ea1a9f9d789ff2dd6b2badd91282c50a7c885930c7f050000006a4730440220414c831100c7a1c800fb342cac1559caea1468d3f0198239bd77a88a5dd4b190022008f8cad8b26277e322822868fb058b436961e4451178a0425ddc927f3a38988101210259de4b805b7de137cdf5a99e5ad92f1d89d4d97ca2549c2980bb3754d8b7cb07ffffffff023e480f00000000001976a91480b7da7e73dccfeab078ddf515f2a8d88e411b5a88ac07646c03000000001976a914d632f63d5764cae8ae16a2002ddaa4cb462b6d8588ac00000000",
      // From Mainnet Block 300100
      // http://localhost:3001/insight-api-rapture/rawtx/25540430cb5aab15f49ff12da52fef910f7365c1bd64f6ef03ca7e1521b475cd
      "0100000001b4e2c37816b8cf755533753300468534d017aec090ba5f7d19a55d2e2d8aa947000000006b483045022100a9d98257a499e85cefc630b03928cf90f0835f6e217107322c77188f4d5fffa50220567d57b5342dbd19e47ba16ff871009f55f550fb82995cf5035c00956cc3f7ac0121027d14f28dc36ad86afe98197262fcb8b6dba46b0d5725b0922f1e13a2eca8b6e5ffffffff0200752b7d000000001976a914280e88e6465d173a1c0d2388e6bca989f35af06888ac008ae4a90a0000001976a914cede013072be97999d35fc5e092e3b974035976288ac00000000"
    ]
  ],
  HEX: [
    // Mainnet Block 100014
    "02000000" + // Version
      "ed26536883f1c64ded09b93ec95687a74f43c3b8e7dcefdf22070e0000000000" + // prevHash
      "c802f38c807e91ceabee96d6c75ca72be4e4d4a1bfe15bd04a5f7d9b1b8ea203" + // MerkleRoot
      "3a4abf53" + // Time
      "8d53131b" + // Bits
      "c21a8b00" + // Nonce
      "04000000" + // Transaction Count
      "01" + // Hash Count
      "03a28e1b9b7d5f4ad05be1bfa1d4e4e42ba75cc7d696eeabce917e808cf302c8" + // Hash1
      "0" + // Num Flag Bytes
      "0", // Flags
      
    // Mainnet Block 300100
    "03000000" + // Version
    "35ce79ae46a65f0d0115d831584d0a6882117f75a65386f8f14e150000000000" + // prevHash
    "a0055d45ad9b35e77fb01c59a4feb9976921493d2557a5ac0798b49e82ea1e99" + // MerkleRoot
    "6a04a055" + // Time
    "c380181b" + // Bits
    "00270c9b" + // Nonce
    "0c000000" + // Transaction Count
    "08" + // Hash Count
    "9d0a368bc9923c6cb966135a4ceda30cc5f259f72c8843ce015056375f8a06ec" + // Hash1
    "39e5cd533567ac0a8602bcc4c29e2f01a4abb0fe68ffbc7be6c393db188b72e0" + // Hash2
    "cd75b421157eca03eff664bdc165730f91ef2fa52df19ff415ab5acb30045425" + // Hash3
    "2ef9795147caaeecee5bc2520704bb372cde06dbd2e871750f31336fd3f02be3" + // Hash4
    "2241d3448560f8b1d3a07ea5c31e79eb595632984a20f50944809a61fdd9fe0b" + // Hash5
    "45afbfe270014d5593cb065562f1fed726f767fe334d8b3f4379025cfa5be8c5" + // Hash6
    "198c03da0ccf871db91fe436e2795908eac5cc7d164232182e9445f7f9db1ab2" + // Hash7
    "ed07c181ce5ba7cb66d205bc970f43e1ca11996d611aa8e91e305eb8608c543c" + // Hash8
    "02" + // Num Flag Bytes
    "db3f" // Flags
  ],
  JSON: [
    { // Mainnet Block 100014
      header: {
        hash: "000000000004d7740343cae3cca0d6d63f4d0d125f11fc689306654867a30fb5",
        version: 2,
        prevHash: "00000000000e0722dfefdce7b8c3434fa78756c93eb909ed4dc6f183685326ed",
        merkleRoot: "c802f38c807e91ceabee96d6c75ca72be4e4d4a1bfe15bd04a5f7d9b1b8ea203",
        time: 1405045306,
        bits: 454251405,
        nonce: 9116354
      },
      numTransactions: 4,
      hashes: [
        "03a28e1b9b7d5f4ad05be1bfa1d4e4e42ba75cc7d696eeabce917e808cf302c8"
      ],
      flags: [ 0 ]
    },
    { // Mainnet Block 300100
      header : {
        hash: "00000000000051b99f3fa12da6997bb54327c7b81509829467b499a7ce03136a",
        version : 3,
        prevHash : "0000000000154ef1f88653a6757f1182680a4d5831d815010d5fa646ae79ce35",
        merkleRoot : "a0055d45ad9b35e77fb01c59a4feb9976921493d2557a5ac0798b49e82ea1e99",
        time : 1436550250,
        bits : 454590659,
        nonce : 2601264896
      },
      numTransactions : 12,
      hashes : [
        "9d0a368bc9923c6cb966135a4ceda30cc5f259f72c8843ce015056375f8a06ec",
        "39e5cd533567ac0a8602bcc4c29e2f01a4abb0fe68ffbc7be6c393db188b72e0",
        "cd75b421157eca03eff664bdc165730f91ef2fa52df19ff415ab5acb30045425",
        "2ef9795147caaeecee5bc2520704bb372cde06dbd2e871750f31336fd3f02be3",
        "2241d3448560f8b1d3a07ea5c31e79eb595632984a20f50944809a61fdd9fe0b",
        "45afbfe270014d5593cb065562f1fed726f767fe334d8b3f4379025cfa5be8c5",
        "198c03da0ccf871db91fe436e2795908eac5cc7d164232182e9445f7f9db1ab2",
        "ed07c181ce5ba7cb66d205bc970f43e1ca11996d611aa8e91e305eb8608c543c"
      ],
      flags : [ 219, 63 ]
    },
    { // Mainnet Block 12363
      header: {
        hash: "000000000b4d23f9076e9649efeb187db832192e6dd4f423f77c15d7a0a86841",
        version: 2,
        prevHash: "000000000b7c6b508d001f7ccdee9aa5938ed4225c6fd30e7cbc7354b23d11d7",
        merkleRoot: "503bb32178ecbf539887671f96525c9496f0c6c8d5ef9ac5a17120a02566385a",
        time: 1391670030,
        nonce: 3887755349,
        bits: 471254460,
      },
      numTransactions: 1,
      hashes: [
        "5a386625a02071a1c59aefd5c8c6f096945c52961f67879853bfec7821b33b50"
      ],
      flags: [ 0 ]
    },
    { // Mainnet Block 280472
      flags : [ 0 ],
      numTransactions : 1,
      hashes : [
        "9f46ef8869acf4dcaf4bac2123436020ece06bf0969478112364646ac946fae3"
      ],
      header : {
        hash: "000000000015a12e8131ef9a8570955ca07755ed9d1afe3ff97fb81dfdc9873c",
        prevHash : "000000000009a2104d476751e045a436ba9431ba511a4e9384c9c145162931f0",
        merkleRoot : "e3fa46c96a64642311789496f06be0ec2060432321ac4bafdcf4ac6988ef469f",
        time : 1433459232,
        version : 3,
        nonce : 3851491840,
        bits : 455002837,
      }
    },
    { // Mainnet FilteredBlock 399775 with filter: 6f64fd5aa9dd01f74c03656d376625cf80328d83d9afebe60cc68b8f0e245bd9
      "header": {
      "hash": "0000000000000000011b04bc9f4f3856e299b53a335eb1c42be906237c860bb8",
      "version": 4,
      "prevHash": "0000000000000000015373947aa93c7cb16a308fb0a59644d4123072ad24ce5b",
      "merkleRoot": "ac1841eb3b7d380ee114270e3b1c7df349f1e27e2f0f7891138199bc07e006f8",
      "time": 1456274787,
      "bits": 403093919,
      "nonce": 736568686
      },
      "numTransactions": 3309,
      "hashes": [
        "adaf1e41a5349a7e2b27e6f2b5fc1186d576d21b47531a410a654439f49bd5a9",
        "0f64562b6d361757bfdc5926d28cafb7c45e4822b4ad5a14e65530d0c9d44cd2",
        "c34dec8d5954d8c151c3a594a5a6d1f3a1ec8a1a6c470b27aea879b7757328fb",
        "c044e5d998fe29cdbe88f87c97c3547f142f5b491cb909d9b0a8e9d3ab7fc984",
        "51ecd2d2b02b0ca1a3b439eae3adf87ab37dd87f7be0c5b3437cd22350079101",
        "684ebe37c6eaae2879249ff20b3769d5f2f7ad853a5363a4baee68c0c85777a5",
        "e561fbeb0faff42f95f2dc8d57d432d4d1a9f84483597a0602e1edc3390f1e33",
        "02c070afc743c885a6c8d94d15d6e9c3b991c636b4284258dd37686c8792fe44",
        "6f64fd5aa9dd01f74c03656d376625cf80328d83d9afebe60cc68b8f0e245bd9",
        "a296fef97b3da0825bac00c794ea234913421b7c1cbb8571978d8d5ba3b16de2",
        "691c6855c5da434a06cb39a7e47d9337da0e39112ad975cc70cecc882233920a",
        "6a9e7f8e6d1d8c326a774ff691bdf424252cee710f8e5d9da2c094e999c15efc",
        "0723ffc695fef989e86784fa2b47097d55f6aac244631536d8d901f5cd9bf170"
        ],
      "flags": [171,86,23,0]
    }
  ]
};
