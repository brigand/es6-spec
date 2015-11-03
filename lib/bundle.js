(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[{"text":"Scope","id":"sec-scope"},{"text":"Conformance","id":"sec-conformance"},{"text":"references","id":"sec-normative-references"},{"text":"Overview","id":"sec-overview"},{"text":"Scripting","id":"sec-web-scripting"},{"text":"ECMAScript Overview","id":"sec-ecmascript-overview"},{"text":"Objects","id":"sec-objects"},{"text":"The Strict Variant of ECMAScript","id":"sec-strict-variant-of-ecmascript"},{"text":"and definitions","id":"sec-terms-and-definitions"},{"text":"type","id":"sec-type"},{"text":"primitive value","id":"sec-primitive-value"},{"text":"object","id":"sec-terms-and-definitions-object"},{"text":"constructor","id":"sec-constructor"},{"text":"prototype","id":"sec-terms-and-definitions-prototype"},{"text":"ordinary object","id":"sec-ordinary-object"},{"text":"object","id":"sec-exotic-object"},{"text":"standard object","id":"sec-standard-object"},{"text":"built-in object","id":"sec-built-in-object"},{"text":"undefined value","id":"sec-undefined-value"},{"text":"Undefined type","id":"sec-terms-and-definitions-undefined-type"},{"text":"value","id":"sec-null-value"},{"text":"Null type","id":"sec-terms-and-definitions-null-type"},{"text":"Boolean value","id":"sec-terms-and-definitions-boolean-value"},{"text":"Boolean type","id":"sec-terms-and-definitions-boolean-type"},{"text":"Boolean object","id":"sec-boolean-object"},{"text":"String value","id":"sec-terms-and-definitions-string-value"},{"text":"String type","id":"sec-terms-and-definitions-string-type"},{"text":"object","id":"sec-string-object"},{"text":"Number value","id":"sec-terms-and-definitions-number-value"},{"text":"Number type","id":"sec-terms-and-definitions-number-type"},{"text":"object","id":"sec-number-object"},{"text":"Infinity","id":"sec-terms-and-definitions-infinity"},{"text":"NaN","id":"sec-terms-and-definitions-nan"},{"text":"value","id":"sec-symbol-value"},{"text":"Symbol type","id":"sec-terms-and-definitions-symbol-type"},{"text":"object","id":"sec-symbol-object"},{"text":"function","id":"sec-terms-and-definitions-function"},{"text":"built-in function","id":"sec-built-in-function"},{"text":"property","id":"sec-property"},{"text":"method","id":"sec-method"},{"text":"built-in method","id":"sec-built-in-method"},{"text":"attribute","id":"sec-attribute"},{"text":"property","id":"sec-own-property"},{"text":"inherited property","id":"sec-inherited-property"},{"text":"Organization of This Specification","id":"sec-organization-of-this-specification"},{"text":"Conventions","id":"sec-notational-conventions"},{"text":"Syntactic and Lexical Grammars","id":"sec-syntactic-and-lexical-grammars"},{"text":"Context-Free Grammars","id":"sec-context-free-grammars"},{"text":"The Lexical and RegExp Grammars","id":"sec-lexical-and-regexp-grammars"},{"text":"The Numeric String Grammar","id":"sec-numeric-string-grammar"},{"text":"Syntactic Grammar","id":"sec-syntactic-grammar"},{"text":"Grammar Notation","id":"sec-grammar-notation"},{"text":"Algorithm Conventions","id":"sec-algorithm-conventions"},{"text":"Semantic Rules","id":"sec-static-semantic-rules"},{"text":"ECMAScript Data Types and Values","id":"sec-ecmascript-data-types-and-values"},{"text":"ECMAScript Language Types","id":"sec-ecmascript-language-types"},{"text":"The Undefined Type","id":"sec-ecmascript-language-types-undefined-type"},{"text":"The Null Type","id":"sec-ecmascript-language-types-null-type"},{"text":"The Boolean Type","id":"sec-ecmascript-language-types-boolean-type"},{"text":"The String Type","id":"sec-ecmascript-language-types-string-type"},{"text":"The Symbol Type","id":"sec-ecmascript-language-types-symbol-type"},{"text":"Well-Known Symbols","id":"sec-well-known-symbols"},{"text":"The Number Type","id":"sec-ecmascript-language-types-number-type"},{"text":"Object Type","id":"sec-object-type"},{"text":"Property Attributes","id":"sec-property-attributes"},{"text":"Object Internal Methods and Internal Slots","id":"sec-object-internal-methods-and-internal-slots"},{"text":"Invariants of the Essential Internal Methods","id":"sec-invariants-of-the-essential-internal-methods"},{"text":"Well-Known Intrinsic Objects","id":"sec-well-known-intrinsic-objects"},{"text":"ECMAScript Specification Types","id":"sec-ecmascript-specification-types"},{"text":"The List and Record Specification Type","id":"sec-list-and-record-specification-type"},{"text":"The Completion Record Specification Type","id":"sec-completion-record-specification-type"},{"text":"NormalCompletion","id":"sec-normalcompletion"},{"text":"Implicit Completion Values","id":"sec-implicit-completion-values"},{"text":"Throw an Exception","id":"sec-throw-an-exception"},{"text":"ReturnIfAbrupt","id":"sec-returnifabrupt"},{"text":"UpdateEmpty ( completionRecord, value)","id":"sec-updateempty"},{"text":"The Reference Specification Type","id":"sec-reference-specification-type"},{"text":"(V)","id":"sec-getvalue"},{"text":"(V, W)","id":"sec-putvalue"},{"text":"GetThisValue (V)","id":"sec-getthisvalue"},{"text":"InitializeReferencedBinding (V, W)","id":"sec-initializereferencedbinding"},{"text":"The Property Descriptor Specification Type","id":"sec-property-descriptor-specification-type"},{"text":"IsAccessorDescriptor ( Desc )","id":"sec-isaccessordescriptor"},{"text":"IsDataDescriptor ( Desc )","id":"sec-isdatadescriptor"},{"text":"IsGenericDescriptor ( Desc )","id":"sec-isgenericdescriptor"},{"text":"FromPropertyDescriptor ( Desc )","id":"sec-frompropertydescriptor"},{"text":"ToPropertyDescriptor ( Obj )","id":"sec-topropertydescriptor"},{"text":"CompletePropertyDescriptor ( Desc  )","id":"sec-completepropertydescriptor"},{"text":"The Lexical Environment and Environment Record Specification Types","id":"sec-lexical-environment-and-environment-record-specification-types"},{"text":"Blocks","id":"sec-data-blocks"},{"text":"CreateByteDataBlock(size)","id":"sec-createbytedatablock"},{"text":"CopyDataBlockBytes(toBlock, toIndex, fromBlock, fromIndex, count)","id":"sec-copydatablockbytes"},{"text":"Operations","id":"sec-abstract-operations"},{"text":"Conversion","id":"sec-type-conversion"},{"text":"( input [, PreferredType] )","id":"sec-toprimitive"},{"text":"argument )","id":"sec-toboolean"},{"text":"argument )","id":"sec-tonumber"},{"text":"ToNumber Applied to the String Type","id":"sec-tonumber-applied-to-the-string-type"},{"text":"Runtime Semantics: MV’s","id":"sec-runtime-semantics-mv-s"},{"text":"argument )","id":"sec-tointeger"},{"text":"argument )","id":"sec-toint32"},{"text":"argument )","id":"sec-touint32"},{"text":"argument )","id":"sec-toint16"},{"text":"argument )","id":"sec-touint16"},{"text":"argument )","id":"sec-toint8"},{"text":"argument )","id":"sec-touint8"},{"text":"ToUint8Clamp ( argument )","id":"sec-touint8clamp"},{"text":"argument )","id":"sec-tostring"},{"text":"ToString Applied to the Number Type","id":"sec-tostring-applied-to-the-number-type"},{"text":"argument )","id":"sec-toobject"},{"text":"ToPropertyKey ( argument )","id":"sec-topropertykey"},{"text":"argument )","id":"sec-tolength"},{"text":"CanonicalNumericIndexString ( argument )","id":"sec-canonicalnumericindexstring"},{"text":"Testing and Comparison Operations","id":"sec-testing-and-comparison-operations"},{"text":"RequireObjectCoercible ( argument )","id":"sec-requireobjectcoercible"},{"text":"argument )","id":"sec-isarray"},{"text":"argument )","id":"sec-iscallable"},{"text":"IsConstructor ( argument )","id":"sec-isconstructor"},{"text":"IsExtensible (O)","id":"sec-isextensible-o"},{"text":"argument )","id":"sec-isinteger"},{"text":"IsPropertyKey ( argument )","id":"sec-ispropertykey"},{"text":"argument )","id":"sec-isregexp"},{"text":"y)","id":"sec-samevalue"},{"text":"SameValueZero(x, y)","id":"sec-samevaluezero"},{"text":"Abstract Relational Comparison","id":"sec-abstract-relational-comparison"},{"text":"Abstract Equality Comparison","id":"sec-abstract-equality-comparison"},{"text":"Strict Equality Comparison","id":"sec-strict-equality-comparison"},{"text":"Operations on Objects","id":"sec-operations-on-objects"},{"text":"Get (O, P)","id":"sec-get-o-p"},{"text":"GetV (V, P)","id":"sec-getv"},{"text":"P, V, Throw)","id":"sec-set-o-p-v-throw"},{"text":"CreateDataProperty (O, P, V)","id":"sec-createdataproperty"},{"text":"CreateMethodProperty (O, P, V)","id":"sec-createmethodproperty"},{"text":"CreateDataPropertyOrThrow (O, P, V)","id":"sec-createdatapropertyorthrow"},{"text":"DefinePropertyOrThrow (O, P, desc)","id":"sec-definepropertyorthrow"},{"text":"DeletePropertyOrThrow (O, P)","id":"sec-deletepropertyorthrow"},{"text":"P)","id":"sec-getmethod"},{"text":"HasProperty (O, P)","id":"sec-hasproperty"},{"text":"HasOwnProperty (O, P)","id":"sec-hasownproperty"},{"text":"[argumentsList])","id":"sec-call"},{"text":"(F, [argumentsList], [newTarget])","id":"sec-construct"},{"text":"SetIntegrityLevel (O, level)","id":"sec-setintegritylevel"},{"text":"TestIntegrityLevel (O, level)","id":"sec-testintegritylevel"},{"text":"CreateArrayFromList (elements)","id":"sec-createarrayfromlist"},{"text":"CreateListFromArrayLike (obj [, elementTypes] )","id":"sec-createlistfromarraylike"},{"text":"[argumentsList])","id":"sec-invoke"},{"text":"OrdinaryHasInstance (C, O)","id":"sec-ordinaryhasinstance"},{"text":"SpeciesConstructor ( O, defaultConstructor )","id":"sec-speciesconstructor"},{"text":"EnumerableOwnNames (O)","id":"sec-enumerableownnames"},{"text":"GetFunctionRealm ( obj )","id":"sec-getfunctionrealm"},{"text":"Operations on Iterator Objects","id":"sec-operations-on-iterator-objects"},{"text":"( obj, method )","id":"sec-getiterator"},{"text":"IteratorNext ( iterator, value )","id":"sec-iteratornext"},{"text":"IteratorComplete ( iterResult )","id":"sec-iteratorcomplete"},{"text":"IteratorValue ( iterResult )","id":"sec-iteratorvalue"},{"text":"IteratorStep ( iterator )","id":"sec-iteratorstep"},{"text":"IteratorClose( iterator, completion )","id":"sec-iteratorclose"},{"text":"CreateIterResultObject ( value, done )","id":"sec-createiterresultobject"},{"text":"CreateListIterator ( list )","id":"sec-createlistiterator"},{"text":"ListIterator next( )","id":"sec-listiterator-next"},{"text":"Executable Code and Execution Contexts","id":"sec-executable-code-and-execution-contexts"},{"text":"Lexical Environments","id":"sec-lexical-environments"},{"text":"Environment Records","id":"sec-environment-records"},{"text":"Declarative Environment Records","id":"sec-declarative-environment-records"},{"text":"HasBinding(N)","id":"sec-declarative-environment-records-hasbinding-n"},{"text":"CreateMutableBinding (N, D)","id":"sec-declarative-environment-records-createmutablebinding-n-d"},{"text":"CreateImmutableBinding (N, S)","id":"sec-declarative-environment-records-createimmutablebinding-n-s"},{"text":"InitializeBinding (N,V)","id":"sec-declarative-environment-records-initializebinding-n-v"},{"text":"SetMutableBinding (N,V,S)","id":"sec-declarative-environment-records-setmutablebinding-n-v-s"},{"text":"GetBindingValue(N,S)","id":"sec-declarative-environment-records-getbindingvalue-n-s"},{"text":"DeleteBinding (N)","id":"sec-declarative-environment-records-deletebinding-n"},{"text":"HasThisBinding ()","id":"sec-declarative-environment-records-hasthisbinding"},{"text":"HasSuperBinding ()","id":"sec-declarative-environment-records-hassuperbinding"},{"text":"WithBaseObject()","id":"sec-declarative-environment-records-withbaseobject"},{"text":"Object Environment Records","id":"sec-object-environment-records"},{"text":"HasBinding(N)","id":"sec-object-environment-records-hasbinding-n"},{"text":"CreateMutableBinding (N, D)","id":"sec-object-environment-records-createmutablebinding-n-d"},{"text":"CreateImmutableBinding (N, S)","id":"sec-object-environment-records-createimmutablebinding-n-s"},{"text":"InitializeBinding (N,V)","id":"sec-object-environment-records-initializebinding-n-v"},{"text":"SetMutableBinding (N,V,S)","id":"sec-object-environment-records-setmutablebinding-n-v-s"},{"text":"GetBindingValue(N,S)","id":"sec-object-environment-records-getbindingvalue-n-s"},{"text":"DeleteBinding (N)","id":"sec-object-environment-records-deletebinding-n"},{"text":"HasThisBinding ()","id":"sec-object-environment-records-hasthisbinding"},{"text":"HasSuperBinding ()","id":"sec-object-environment-records-hassuperbinding"},{"text":"WithBaseObject()","id":"sec-object-environment-records-withbaseobject"},{"text":"Function Environment Records","id":"sec-function-environment-records"},{"text":"BindThisValue(V)","id":"sec-bindthisvalue"},{"text":"HasThisBinding ()","id":"sec-function-environment-records-hasthisbinding"},{"text":"HasSuperBinding ()","id":"sec-function-environment-records-hassuperbinding"},{"text":"GetThisBinding ()","id":"sec-function-environment-records-getthisbinding"},{"text":"GetSuperBase ()","id":"sec-getsuperbase"},{"text":"Global Environment Records","id":"sec-global-environment-records"},{"text":"HasBinding(N)","id":"sec-global-environment-records-hasbinding-n"},{"text":"CreateMutableBinding (N, D)","id":"sec-global-environment-records-createmutablebinding-n-d"},{"text":"CreateImmutableBinding (N, S)","id":"sec-global-environment-records-createimmutablebinding-n-s"},{"text":"InitializeBinding (N,V)","id":"sec-global-environment-records-initializebinding-n-v"},{"text":"SetMutableBinding (N,V,S)","id":"sec-global-environment-records-setmutablebinding-n-v-s"},{"text":"GetBindingValue(N,S)","id":"sec-global-environment-records-getbindingvalue-n-s"},{"text":"DeleteBinding (N)","id":"sec-global-environment-records-deletebinding-n"},{"text":"HasThisBinding ()","id":"sec-global-environment-records-hasthisbinding"},{"text":"HasSuperBinding ()","id":"sec-global-environment-records-hassuperbinding"},{"text":"WithBaseObject()","id":"sec-global-environment-records-withbaseobject"},{"text":"GetThisBinding ()","id":"sec-global-environment-records-getthisbinding"},{"text":"HasVarDeclaration (N)","id":"sec-hasvardeclaration"},{"text":"HasLexicalDeclaration (N)","id":"sec-haslexicaldeclaration"},{"text":"HasRestrictedGlobalProperty (N)","id":"sec-hasrestrictedglobalproperty"},{"text":"CanDeclareGlobalVar (N)","id":"sec-candeclareglobalvar"},{"text":"CanDeclareGlobalFunction (N)","id":"sec-candeclareglobalfunction"},{"text":"CreateGlobalVarBinding (N, D)","id":"sec-createglobalvarbinding"},{"text":"CreateGlobalFunctionBinding (N, V, D)","id":"sec-createglobalfunctionbinding"},{"text":"Module Environment Records","id":"sec-module-environment-records"},{"text":"GetBindingValue(N,S)","id":"sec-module-environment-records-getbindingvalue-n-s"},{"text":"DeleteBinding (N)","id":"sec-module-environment-records-deletebinding-n"},{"text":"HasThisBinding ()","id":"sec-module-environment-records-hasthisbinding"},{"text":"GetThisBinding ()","id":"sec-module-environment-records-getthisbinding"},{"text":"CreateImportBinding (N, M, N2)","id":"sec-createimportbinding"},{"text":"Lexical Environment Operations","id":"sec-lexical-environment-operations"},{"text":"GetIdentifierReference (lex, name, strict)","id":"sec-getidentifierreference"},{"text":"NewDeclarativeEnvironment (E)","id":"sec-newdeclarativeenvironment"},{"text":"NewObjectEnvironment (O, E)","id":"sec-newobjectenvironment"},{"text":"NewFunctionEnvironment ( F, newTarget )","id":"sec-newfunctionenvironment"},{"text":"NewGlobalEnvironment ( G )","id":"sec-newglobalenvironment"},{"text":"NewModuleEnvironment (E)","id":"sec-newmoduleenvironment"},{"text":"Realms","id":"sec-code-realms"},{"text":"( )","id":"sec-createrealm"},{"text":"CreateIntrinsics ( realmRec )","id":"sec-createintrinsics"},{"text":"SetRealmGlobalObject ( realmRec, globalObj )","id":"sec-setrealmglobalobject"},{"text":"SetDefaultGlobalBindings ( realmRec )","id":"sec-setdefaultglobalbindings"},{"text":"Execution Contexts","id":"sec-execution-contexts"},{"text":"ResolveBinding ( name, [env] )","id":"sec-resolvebinding"},{"text":"GetThisEnvironment ( )","id":"sec-getthisenvironment"},{"text":"ResolveThisBinding ( )","id":"sec-resolvethisbinding"},{"text":"GetNewTarget ( )","id":"sec-getnewtarget"},{"text":"GetGlobalObject ( )","id":"sec-getglobalobject"},{"text":"and Job Queues","id":"sec-jobs-and-job-queues"},{"text":"(queueName, job, arguments)","id":"sec-enqueuejob"},{"text":"result","id":"sec-nextjob-result"},{"text":"ECMAScript Initialization()","id":"sec-ecmascript-initialization"},{"text":"InitializeHostDefinedRealm ( realm )","id":"sec-initializehostdefinedrealm"},{"text":"Ordinary and Exotic Objects Behaviours","id":"sec-ordinary-and-exotic-objects-behaviours"},{"text":"Ordinary Object Internal Methods and Internal Slots","id":"sec-ordinary-object-internal-methods-and-internal-slots"},{"text":"[[GetPrototypeOf]] ( )","id":"sec-ordinary-object-internal-methods-and-internal-slots-getprototypeof"},{"text":"[[SetPrototypeOf]] (V)","id":"sec-ordinary-object-internal-methods-and-internal-slots-setprototypeof-v"},{"text":"[[IsExtensible]] ( )","id":"sec-ordinary-object-internal-methods-and-internal-slots-isextensible"},{"text":"[[PreventExtensions]] ( )","id":"sec-ordinary-object-internal-methods-and-internal-slots-preventextensions"},{"text":"[[GetOwnProperty]] (P)","id":"sec-ordinary-object-internal-methods-and-internal-slots-getownproperty-p"},{"text":"OrdinaryGetOwnProperty (O, P)","id":"sec-ordinarygetownproperty"},{"text":"[[DefineOwnProperty]] (P, Desc)","id":"sec-ordinary-object-internal-methods-and-internal-slots-defineownproperty-p-desc"},{"text":"OrdinaryDefineOwnProperty (O, P, Desc)","id":"sec-ordinarydefineownproperty"},{"text":"IsCompatiblePropertyDescriptor (Extensible, Desc, Current)","id":"sec-iscompatiblepropertydescriptor"},{"text":"current)","id":"sec-validateandapplypropertydescriptor"},{"text":"[[HasProperty]](P)","id":"sec-ordinary-object-internal-methods-and-internal-slots-hasproperty-p"},{"text":"OrdinaryHasProperty (O, P)","id":"sec-ordinaryhasproperty"},{"text":"[[Get]] (P, Receiver)","id":"sec-ordinary-object-internal-methods-and-internal-slots-get-p-receiver"},{"text":"[[Set]] ( P, V, Receiver)","id":"sec-ordinary-object-internal-methods-and-internal-slots-set-p-v-receiver"},{"text":"[[Delete]] (P)","id":"sec-ordinary-object-internal-methods-and-internal-slots-delete-p"},{"text":"[[Enumerate]] ()","id":"sec-ordinary-object-internal-methods-and-internal-slots-enumerate"},{"text":"[[OwnPropertyKeys]] ( )","id":"sec-ordinary-object-internal-methods-and-internal-slots-ownpropertykeys"},{"text":"ObjectCreate(proto, internalSlotsList)","id":"sec-objectcreate"},{"text":"internalSlotsList )","id":"sec-ordinarycreatefromconstructor"},{"text":"GetPrototypeFromConstructor ( constructor, intrinsicDefaultProto )","id":"sec-getprototypefromconstructor"},{"text":"ECMAScript Function Objects","id":"sec-ecmascript-function-objects"},{"text":"[[Call]] ( thisArgument, argumentsList)","id":"sec-ecmascript-function-objects-call-thisargument-argumentslist"},{"text":"PrepareForOrdinaryCall( F, newTarget )","id":"sec-prepareforordinarycall"},{"text":"OrdinaryCallBindThis ( F, calleeContext, thisArgument )","id":"sec-ordinarycallbindthis"},{"text":"OrdinaryCallEvaluateBody ( F, argumentsList )","id":"sec-ordinarycallevaluatebody"},{"text":"[[Construct]] ( argumentsList, newTarget)","id":"sec-ecmascript-function-objects-construct-argumentslist-newtarget"},{"text":"FunctionAllocate (functionPrototype, strict [,functionKind] )","id":"sec-functionallocate"},{"text":"FunctionInitialize (F, kind, ParameterList, Body, Scope)","id":"sec-functioninitialize"},{"text":"FunctionCreate (kind, ParameterList, Body, Scope, Strict, prototype)","id":"sec-functioncreate"},{"text":"GeneratorFunctionCreate (kind, ParameterList, Body, Scope, Strict)","id":"sec-generatorfunctioncreate"},{"text":"AddRestrictedFunctionProperties ( F, realm )","id":"sec-addrestrictedfunctionproperties"},{"text":"%ThrowTypeError% ( )","id":"sec-%throwtypeerror%"},{"text":"MakeConstructor (F, writablePrototype, prototype)","id":"sec-makeconstructor"},{"text":"MakeClassConstructor ( F)","id":"sec-makeclassconstructor"},{"text":"( F, homeObject)","id":"sec-makemethod"},{"text":"SetFunctionName (F, name, prefix)","id":"sec-setfunctionname"},{"text":"FunctionDeclarationInstantiation(func, argumentsList)","id":"sec-functiondeclarationinstantiation"},{"text":"Built-in Function Objects","id":"sec-built-in-function-objects"},{"text":"[[Call]] ( thisArgument, argumentsList)","id":"sec-built-in-function-objects-call-thisargument-argumentslist"},{"text":"[[Construct]] (argumentsList, newTarget)","id":"sec-built-in-function-objects-construct-argumentslist-newtarget"},{"text":"CreateBuiltinFunction(realm, steps, prototype, internalSlotsList)","id":"sec-createbuiltinfunction"},{"text":"Built-in Exotic Object Internal Methods and Slots","id":"sec-built-in-exotic-object-internal-methods-and-slots"},{"text":"Bound Function Exotic Objects","id":"sec-bound-function-exotic-objects"},{"text":"[[Call]] ( thisArgument, argumentsList)","id":"sec-bound-function-exotic-objects-call-thisargument-argumentslist"},{"text":"[[Construct]] (argumentsList, newTarget)","id":"sec-bound-function-exotic-objects-construct-argumentslist-newtarget"},{"text":"BoundFunctionCreate (targetFunction, boundThis, boundArgs)","id":"sec-boundfunctioncreate"},{"text":"Array Exotic Objects","id":"sec-array-exotic-objects"},{"text":"[[DefineOwnProperty]] ( P, Desc)","id":"sec-array-exotic-objects-defineownproperty-p-desc"},{"text":"ArrayCreate(length, proto)","id":"sec-arraycreate"},{"text":"ArraySpeciesCreate(originalArray, length)","id":"sec-arrayspeciescreate"},{"text":"ArraySetLength(A, Desc)","id":"sec-arraysetlength"},{"text":"String Exotic Objects","id":"sec-string-exotic-objects"},{"text":"[[GetOwnProperty]] ( P )","id":"sec-string-exotic-objects-getownproperty-p"},{"text":"StringGetIndexProperty (S, P)","id":"sec-stringgetindexproperty"},{"text":"[[HasProperty]](P)","id":"sec-string-exotic-objects-hasproperty-p"},{"text":"[[OwnPropertyKeys]] ( )","id":"sec-string-exotic-objects-ownpropertykeys"},{"text":"StringCreate( value, prototype)","id":"sec-stringcreate"},{"text":"Arguments Exotic Objects","id":"sec-arguments-exotic-objects"},{"text":"[[GetOwnProperty]] (P)","id":"sec-arguments-exotic-objects-getownproperty-p"},{"text":"[[DefineOwnProperty]] (P, Desc)","id":"sec-arguments-exotic-objects-defineownproperty-p-desc"},{"text":"[[Get]] (P, Receiver)","id":"sec-arguments-exotic-objects-get-p-receiver"},{"text":"[[Set]] ( P, V, Receiver)","id":"sec-arguments-exotic-objects-set-p-v-receiver"},{"text":"[[Delete]] (P)","id":"sec-arguments-exotic-objects-delete-p"},{"text":"CreateUnmappedArgumentsObject(argumentsList)","id":"sec-createunmappedargumentsobject"},{"text":")","id":"sec-createmappedargumentsobject"},{"text":"MakeArgGetter ( name, env)","id":"sec-makearggetter"},{"text":"MakeArgSetter ( name, env)","id":"sec-makeargsetter"},{"text":"Integer Indexed Exotic Objects","id":"sec-integer-indexed-exotic-objects"},{"text":"[[GetOwnProperty]] ( P )","id":"sec-integer-indexed-exotic-objects-getownproperty-p"},{"text":"[[HasProperty]](P)","id":"sec-integer-indexed-exotic-objects-hasproperty-p"},{"text":"[[DefineOwnProperty]] ( P, Desc)","id":"sec-integer-indexed-exotic-objects-defineownproperty-p-desc"},{"text":"[[Get]] (P, Receiver)","id":"sec-integer-indexed-exotic-objects-get-p-receiver"},{"text":"[[Set]] ( P, V, Receiver)","id":"sec-integer-indexed-exotic-objects-set-p-v-receiver"},{"text":"[[OwnPropertyKeys]] ()","id":"sec-integer-indexed-exotic-objects-ownpropertykeys"},{"text":"IntegerIndexedObjectCreate (prototype, internalSlotsList)","id":"sec-integerindexedobjectcreate"},{"text":"IntegerIndexedElementGet ( O, index )","id":"sec-integerindexedelementget"},{"text":"IntegerIndexedElementSet ( O, index, value )","id":"sec-integerindexedelementset"},{"text":"Module Namespace Exotic Objects","id":"sec-module-namespace-exotic-objects"},{"text":"[[GetPrototypeOf]] ( )","id":"sec-module-namespace-exotic-objects-getprototypeof"},{"text":"[[SetPrototypeOf]] (V)","id":"sec-module-namespace-exotic-objects-setprototypeof-v"},{"text":"[[IsExtensible]] ( )","id":"sec-module-namespace-exotic-objects-isextensible"},{"text":"[[PreventExtensions]] ( )","id":"sec-module-namespace-exotic-objects-preventextensions"},{"text":"[[GetOwnProperty]] (P)","id":"sec-module-namespace-exotic-objects-getownproperty-p"},{"text":"[[DefineOwnProperty]] (P, Desc)","id":"sec-module-namespace-exotic-objects-defineownproperty-p-desc"},{"text":"[[HasProperty]] (P)","id":"sec-module-namespace-exotic-objects-hasproperty-p"},{"text":"[[Get]] (P, Receiver)","id":"sec-module-namespace-exotic-objects-get-p-receiver"},{"text":"[[Set]] ( P, V, Receiver)","id":"sec-module-namespace-exotic-objects-set-p-v-receiver"},{"text":"[[Delete]] (P)","id":"sec-module-namespace-exotic-objects-delete-p"},{"text":"[[Enumerate]] ()","id":"sec-module-namespace-exotic-objects-enumerate"},{"text":"[[OwnPropertyKeys]] ( )","id":"sec-module-namespace-exotic-objects-ownpropertykeys"},{"text":"ModuleNamespaceCreate (module, exports)","id":"sec-modulenamespacecreate"},{"text":"Proxy Object Internal Methods and Internal Slots","id":"sec-proxy-object-internal-methods-and-internal-slots"},{"text":"[[GetPrototypeOf]] ( )","id":"sec-proxy-object-internal-methods-and-internal-slots-getprototypeof"},{"text":"[[SetPrototypeOf]] (V)","id":"sec-proxy-object-internal-methods-and-internal-slots-setprototypeof-v"},{"text":"[[IsExtensible]] ( )","id":"sec-proxy-object-internal-methods-and-internal-slots-isextensible"},{"text":"[[PreventExtensions]] ( )","id":"sec-proxy-object-internal-methods-and-internal-slots-preventextensions"},{"text":"[[GetOwnProperty]] (P)","id":"sec-proxy-object-internal-methods-and-internal-slots-getownproperty-p"},{"text":"[[DefineOwnProperty]] (P, Desc)","id":"sec-proxy-object-internal-methods-and-internal-slots-defineownproperty-p-desc"},{"text":"[[HasProperty]] (P)","id":"sec-proxy-object-internal-methods-and-internal-slots-hasproperty-p"},{"text":"[[Get]] (P, Receiver)","id":"sec-proxy-object-internal-methods-and-internal-slots-get-p-receiver"},{"text":"[[Set]] ( P, V, Receiver)","id":"sec-proxy-object-internal-methods-and-internal-slots-set-p-v-receiver"},{"text":"[[Delete]] (P)","id":"sec-proxy-object-internal-methods-and-internal-slots-delete-p"},{"text":"[[Enumerate]] ()","id":"sec-proxy-object-internal-methods-and-internal-slots-enumerate"},{"text":"[[OwnPropertyKeys]] ( )","id":"sec-proxy-object-internal-methods-and-internal-slots-ownpropertykeys"},{"text":"[[Call]] (thisArgument, argumentsList)","id":"sec-proxy-object-internal-methods-and-internal-slots-call-thisargument-argumentslist"},{"text":"[[Construct]] ( argumentsList, newTarget)","id":"sec-proxy-object-internal-methods-and-internal-slots-construct-argumentslist-newtarget"},{"text":"ProxyCreate(target, handler)","id":"sec-proxycreate"},{"text":"ECMAScript Language: Source Code","id":"sec-ecmascript-language-source-code"},{"text":"Text","id":"sec-source-text"},{"text":"Semantics:","id":"sec-utf16encoding"},{"text":"Semantics: UTF16Decode( lead, trail )","id":"sec-utf16decode"},{"text":"Types of Source Code","id":"sec-types-of-source-code"},{"text":"Strict Mode Code","id":"sec-strict-mode-code"},{"text":"Non-ECMAScript Functions","id":"sec-non-ecmascript-functions"},{"text":"ECMAScript Language: Lexical Grammar","id":"sec-ecmascript-language-lexical-grammar"},{"text":"Unicode Format-Control Characters","id":"sec-unicode-format-control-characters"},{"text":"Space","id":"sec-white-space"},{"text":"Terminators","id":"sec-line-terminators"},{"text":"Comments","id":"sec-comments"},{"text":"Tokens","id":"sec-tokens"},{"text":"and Keywords","id":"sec-names-and-keywords"},{"text":"Identifier Names","id":"sec-identifier-names"},{"text":"Static Semantics: Early Errors","id":"sec-identifier-names-static-semantics-early-errors"},{"text":"Static Semantics:","id":"sec-identifier-names-static-semantics-stringvalue"},{"text":"Reserved Words","id":"sec-reserved-words"},{"text":"Keywords","id":"sec-keywords"},{"text":"Future Reserved Words","id":"sec-future-reserved-words"},{"text":"Punctuators","id":"sec-punctuators"},{"text":"Literals","id":"sec-ecmascript-language-lexical-grammar-literals"},{"text":"Literals","id":"sec-null-literals"},{"text":"Boolean Literals","id":"sec-boolean-literals"},{"text":"Numeric Literals","id":"sec-literals-numeric-literals"},{"text":"Static Semantics: MV","id":"sec-static-semantics-mv"},{"text":"String Literals","id":"sec-literals-string-literals"},{"text":"Static Semantics:  Early Errors","id":"sec-string-literals-static-semantics-early-errors"},{"text":"Static Semantics:","id":"sec-string-literals-static-semantics-stringvalue"},{"text":"Static Semantics:","id":"sec-static-semantics-sv"},{"text":"Regular Expression Literals","id":"sec-literals-regular-expression-literals"},{"text":"Static Semantics:  Early Errors","id":"sec-literals-regular-expression-literals-static-semantics-early-errors"},{"text":"Static Semantics:","id":"sec-static-semantics-bodytext"},{"text":"Static Semantics:","id":"sec-static-semantics-flagtext"},{"text":"Template Literal Lexical Components","id":"sec-template-literal-lexical-components"},{"text":"Static Semantics:","id":"sec-static-semantics-tv-and-trv"},{"text":"Automatic Semicolon Insertion","id":"sec-automatic-semicolon-insertion"},{"text":"Rules of Automatic Semicolon Insertion","id":"sec-rules-of-automatic-semicolon-insertion"},{"text":"Examples of Automatic Semicolon Insertion","id":"sec-examples-of-automatic-semicolon-insertion"},{"text":"ECMAScript Language: Expressions","id":"sec-ecmascript-language-expressions"},{"text":"Identifiers","id":"sec-identifiers"},{"text":"Static Semantics:  Early Errors","id":"sec-identifiers-static-semantics-early-errors"},{"text":"Static Semantics: BoundNames","id":"sec-identifiers-static-semantics-boundnames"},{"text":"Static Semantics:  IsValidSimpleAssignmentTarget","id":"sec-identifiers-static-semantics-isvalidsimpleassignmenttarget"},{"text":"Static Semantics:","id":"sec-identifiers-static-semantics-stringvalue"},{"text":"Runtime Semantics: BindingInitialization","id":"sec-identifiers-runtime-semantics-bindinginitialization"},{"text":"Runtime Semantics: InitializeBoundName(name, value, environment)","id":"sec-initializeboundname"},{"text":"Runtime Semantics: Evaluation","id":"sec-identifiers-runtime-semantics-evaluation"},{"text":"Primary Expression","id":"sec-primary-expression"},{"text":"Semantics","id":"sec-primary-expression-semantics"},{"text":"Static Semantics:  CoveredParenthesizedExpression","id":"sec-static-semantics-coveredparenthesizedexpression"},{"text":"Static Semantics:  HasName","id":"sec-semantics-static-semantics-hasname"},{"text":"Static Semantics:  IsFunctionDefinition","id":"sec-semantics-static-semantics-isfunctiondefinition"},{"text":"Static Semantics:  IsIdentifierRef","id":"sec-semantics-static-semantics-isidentifierref"},{"text":"Static Semantics:  IsValidSimpleAssignmentTarget","id":"sec-semantics-static-semantics-isvalidsimpleassignmenttarget"},{"text":"The","id":"sec-this-keyword"},{"text":"Runtime Semantics: Evaluation","id":"sec-this-keyword-runtime-semantics-evaluation"},{"text":"Identifier Reference","id":"sec-identifier-reference"},{"text":"Literals","id":"sec-primary-expression-literals"},{"text":"Runtime Semantics: Evaluation","id":"sec-literals-runtime-semantics-evaluation"},{"text":"Array Initializer","id":"sec-array-initializer"},{"text":"Static Semantics:  ElisionWidth","id":"sec-static-semantics-elisionwidth"},{"text":"Runtime Semantics: ArrayAccumulation","id":"sec-runtime-semantics-arrayaccumulation"},{"text":"Runtime Semantics: Evaluation","id":"sec-array-initializer-runtime-semantics-evaluation"},{"text":"Object Initializer","id":"sec-object-initializer"},{"text":"Static Semantics:  Early Errors","id":"sec-object-initializer-static-semantics-early-errors"},{"text":"Static Semantics:  ComputedPropertyContains","id":"sec-object-initializer-static-semantics-computedpropertycontains"},{"text":"Static Semantics:  Contains","id":"sec-object-initializer-static-semantics-contains"},{"text":"Static Semantics: HasComputedPropertyKey","id":"sec-object-initializer-static-semantics-hascomputedpropertykey"},{"text":"Static Semantics:  IsComputedPropertyKey","id":"sec-static-semantics-iscomputedpropertykey"},{"text":"Static Semantics:","id":"sec-object-initializer-static-semantics-propname"},{"text":"Static Semantics:  PropertyNameList","id":"sec-static-semantics-propertynamelist"},{"text":"Runtime Semantics: Evaluation","id":"sec-object-initializer-runtime-semantics-evaluation"},{"text":"Runtime Semantics: PropertyDefinitionEvaluation","id":"sec-object-initializer-runtime-semantics-propertydefinitionevaluation"},{"text":"Function Defining Expressions","id":"sec-function-defining-expressions"},{"text":"Regular Expression Literals","id":"sec-primary-expression-regular-expression-literals"},{"text":"Static Semantics:  Early Errors","id":"sec-primary-expression-regular-expression-literals-static-semantics-early-errors"},{"text":"Runtime Semantics: Evaluation","id":"sec-regular-expression-literals-runtime-semantics-evaluation"},{"text":"Template Literals","id":"sec-template-literals"},{"text":"Static Semantics:  TemplateStrings","id":"sec-static-semantics-templatestrings"},{"text":"Runtime Semantics: ArgumentListEvaluation","id":"sec-template-literals-runtime-semantics-argumentlistevaluation"},{"text":"Runtime Semantics: GetTemplateObject ( templateLiteral )","id":"sec-gettemplateobject"},{"text":"Runtime Semantics: SubstitutionEvaluation","id":"sec-runtime-semantics-substitutionevaluation"},{"text":"Runtime Semantics: Evaluation","id":"sec-template-literals-runtime-semantics-evaluation"},{"text":"The Grouping Operator","id":"sec-grouping-operator"},{"text":"Static Semantics:  Early Errors","id":"sec-grouping-operator-static-semantics-early-errors"},{"text":"Static Semantics:  IsFunctionDefinition","id":"sec-grouping-operator-static-semantics-isfunctiondefinition"},{"text":"Static Semantics:  IsValidSimpleAssignmentTarget","id":"sec-grouping-operator-static-semantics-isvalidsimpleassignmenttarget"},{"text":"Runtime Semantics: Evaluation","id":"sec-grouping-operator-runtime-semantics-evaluation"},{"text":"Left-Hand-Side Expressions","id":"sec-left-hand-side-expressions"},{"text":"Static Semantics","id":"sec-static-semantics"},{"text":"Static Semantics:  Contains","id":"sec-static-semantics-static-semantics-contains"},{"text":"Static Semantics:  IsFunctionDefinition","id":"sec-static-semantics-static-semantics-isfunctiondefinition"},{"text":"Static Semantics:  IsDestructuring","id":"sec-static-semantics-static-semantics-isdestructuring"},{"text":"Static Semantics:  IsIdentifierRef","id":"sec-static-semantics-static-semantics-isidentifierref"},{"text":"Static Semantics:  IsValidSimpleAssignmentTarget","id":"sec-static-semantics-static-semantics-isvalidsimpleassignmenttarget"},{"text":"Property Accessors","id":"sec-property-accessors"},{"text":"Runtime Semantics: Evaluation","id":"sec-property-accessors-runtime-semantics-evaluation"},{"text":"The","id":"sec-new-operator"},{"text":"Runtime Semantics: Evaluation","id":"sec-new-operator-runtime-semantics-evaluation"},{"text":"arguments)","id":"sec-evaluatenew"},{"text":"Function Calls","id":"sec-function-calls"},{"text":"Runtime Semantics: Evaluation","id":"sec-function-calls-runtime-semantics-evaluation"},{"text":"Runtime Semantics: EvaluateCall( ref, arguments, tailPosition )","id":"sec-evaluatecall"},{"text":"tailPosition )","id":"sec-evaluatedirectcall"},{"text":"The","id":"sec-super-keyword"},{"text":"Runtime Semantics: Evaluation","id":"sec-super-keyword-runtime-semantics-evaluation"},{"text":"Runtime Semantics: GetSuperConstructor ( )","id":"sec-getsuperconstructor"},{"text":"strict)","id":"sec-makesuperpropertyreference"},{"text":"Argument Lists","id":"sec-argument-lists"},{"text":"Runtime Semantics: ArgumentListEvaluation","id":"sec-argument-lists-runtime-semantics-argumentlistevaluation"},{"text":"Tagged Templates","id":"sec-tagged-templates"},{"text":"Runtime Semantics: Evaluation","id":"sec-tagged-templates-runtime-semantics-evaluation"},{"text":"Meta Properties","id":"sec-meta-properties"},{"text":"Runtime Semantics: Evaluation","id":"sec-meta-properties-runtime-semantics-evaluation"},{"text":"Postfix Expressions","id":"sec-postfix-expressions"},{"text":"Static Semantics:  Early Errors","id":"sec-postfix-expressions-static-semantics-early-errors"},{"text":"Static Semantics:  IsFunctionDefinition","id":"sec-postfix-expressions-static-semantics-isfunctiondefinition"},{"text":"Static Semantics:  IsValidSimpleAssignmentTarget","id":"sec-postfix-expressions-static-semantics-isvalidsimpleassignmenttarget"},{"text":"Postfix Increment Operator","id":"sec-postfix-increment-operator"},{"text":"Runtime Semantics: Evaluation","id":"sec-postfix-increment-operator-runtime-semantics-evaluation"},{"text":"Postfix Decrement Operator","id":"sec-postfix-decrement-operator"},{"text":"Runtime Semantics: Evaluation","id":"sec-postfix-decrement-operator-runtime-semantics-evaluation"},{"text":"Operators","id":"sec-unary-operators"},{"text":"Static Semantics:  Early Errors","id":"sec-unary-operators-static-semantics-early-errors"},{"text":"Static Semantics:  IsFunctionDefinition","id":"sec-unary-operators-static-semantics-isfunctiondefinition"},{"text":"Static Semantics:  IsValidSimpleAssignmentTarget","id":"sec-unary-operators-static-semantics-isvalidsimpleassignmenttarget"},{"text":"The","id":"sec-delete-operator"},{"text":"Static Semantics:  Early Errors","id":"sec-delete-operator-static-semantics-early-errors"},{"text":"Runtime Semantics: Evaluation","id":"sec-delete-operator-runtime-semantics-evaluation"},{"text":"The","id":"sec-void-operator"},{"text":"Runtime Semantics: Evaluation","id":"sec-void-operator-runtime-semantics-evaluation"},{"text":"The","id":"sec-typeof-operator"},{"text":"Runtime Semantics: Evaluation","id":"sec-typeof-operator-runtime-semantics-evaluation"},{"text":"Prefix Increment Operator","id":"sec-prefix-increment-operator"},{"text":"Runtime Semantics: Evaluation","id":"sec-prefix-increment-operator-runtime-semantics-evaluation"},{"text":"Prefix Decrement Operator","id":"sec-prefix-decrement-operator"},{"text":"Runtime Semantics: Evaluation","id":"sec-prefix-decrement-operator-runtime-semantics-evaluation"},{"text":"Unary","id":"sec-unary-plus-operator"},{"text":"Runtime Semantics: Evaluation","id":"sec-unary-plus-operator-runtime-semantics-evaluation"},{"text":"Unary","id":"sec-unary-minus-operator"},{"text":"Runtime Semantics: Evaluation","id":"sec-unary-minus-operator-runtime-semantics-evaluation"},{"text":"Bitwise NOT Operator (","id":"sec-bitwise-not-operator"},{"text":"Runtime Semantics: Evaluation","id":"sec-bitwise-not-operator-runtime-semantics-evaluation"},{"text":"Logical NOT Operator (","id":"sec-logical-not-operator"},{"text":"Runtime Semantics: Evaluation","id":"sec-logical-not-operator-runtime-semantics-evaluation"},{"text":"Multiplicative Operators","id":"sec-multiplicative-operators"},{"text":"Static Semantics:  IsFunctionDefinition","id":"sec-multiplicative-operators-static-semantics-isfunctiondefinition"},{"text":"Static Semantics:  IsValidSimpleAssignmentTarget","id":"sec-multiplicative-operators-static-semantics-isvalidsimpleassignmenttarget"},{"text":"Runtime Semantics: Evaluation","id":"sec-multiplicative-operators-runtime-semantics-evaluation"},{"text":"Applying the","id":"sec-applying-the-mul-operator"},{"text":"Applying the","id":"sec-applying-the-div-operator"},{"text":"Applying the","id":"sec-applying-the-mod-operator"},{"text":"Additive Operators","id":"sec-additive-operators"},{"text":"Static Semantics:  IsFunctionDefinition","id":"sec-additive-operators-static-semantics-isfunctiondefinition"},{"text":"Static Semantics:  IsValidSimpleAssignmentTarget","id":"sec-additive-operators-static-semantics-isvalidsimpleassignmenttarget"},{"text":"The Addition operator (","id":"sec-addition-operator-plus"},{"text":"Runtime Semantics: Evaluation","id":"sec-addition-operator-plus-runtime-semantics-evaluation"},{"text":"The Subtraction Operator (","id":"sec-subtraction-operator-minus"},{"text":"Runtime Semantics: Evaluation","id":"sec-subtraction-operator-minus-runtime-semantics-evaluation"},{"text":"Applying the Additive Operators to Numbers","id":"sec-applying-the-additive-operators-to-numbers"},{"text":"Bitwise Shift Operators","id":"sec-bitwise-shift-operators"},{"text":"Static Semantics:  IsFunctionDefinition","id":"sec-bitwise-shift-operators-static-semantics-isfunctiondefinition"},{"text":"Static Semantics:  IsValidSimpleAssignmentTarget","id":"sec-bitwise-shift-operators-static-semantics-isvalidsimpleassignmenttarget"},{"text":"The Left Shift Operator (","id":"sec-left-shift-operator"},{"text":"Runtime Semantics: Evaluation","id":"sec-left-shift-operator-runtime-semantics-evaluation"},{"text":"The Signed Right Shift Operator (","id":"sec-signed-right-shift-operator"},{"text":"Runtime Semantics: Evaluation","id":"sec-signed-right-shift-operator-runtime-semantics-evaluation"},{"text":"The Unsigned Right Shift Operator (","id":"sec-unsigned-right-shift-operator"},{"text":"Runtime Semantics: Evaluation","id":"sec-unsigned-right-shift-operator-runtime-semantics-evaluation"},{"text":"Relational Operators","id":"sec-relational-operators"},{"text":"Static Semantics:  IsFunctionDefinition","id":"sec-relational-operators-static-semantics-isfunctiondefinition"},{"text":"Static Semantics:  IsValidSimpleAssignmentTarget","id":"sec-relational-operators-static-semantics-isvalidsimpleassignmenttarget"},{"text":"Runtime Semantics: Evaluation","id":"sec-relational-operators-runtime-semantics-evaluation"},{"text":"Runtime Semantics: InstanceofOperator(O, C)","id":"sec-instanceofoperator"},{"text":"Equality Operators","id":"sec-equality-operators"},{"text":"Static Semantics:  IsFunctionDefinition","id":"sec-equality-operators-static-semantics-isfunctiondefinition"},{"text":"Static Semantics:  IsValidSimpleAssignmentTarget","id":"sec-equality-operators-static-semantics-isvalidsimpleassignmenttarget"},{"text":"Runtime Semantics: Evaluation","id":"sec-equality-operators-runtime-semantics-evaluation"},{"text":"Binary Bitwise Operators","id":"sec-binary-bitwise-operators"},{"text":"Static Semantics:  IsFunctionDefinition","id":"sec-binary-bitwise-operators-static-semantics-isfunctiondefinition"},{"text":"Static Semantics:  IsValidSimpleAssignmentTarget","id":"sec-binary-bitwise-operators-static-semantics-isvalidsimpleassignmenttarget"},{"text":"Runtime Semantics: Evaluation","id":"sec-binary-bitwise-operators-runtime-semantics-evaluation"},{"text":"Binary Logical Operators","id":"sec-binary-logical-operators"},{"text":"Static Semantics:  IsFunctionDefinition","id":"sec-binary-logical-operators-static-semantics-isfunctiondefinition"},{"text":"Static Semantics:  IsValidSimpleAssignmentTarget","id":"sec-binary-logical-operators-static-semantics-isvalidsimpleassignmenttarget"},{"text":"Runtime Semantics: Evaluation","id":"sec-binary-logical-operators-runtime-semantics-evaluation"},{"text":"Conditional Operator (","id":"sec-conditional-operator"},{"text":"Static Semantics:  IsFunctionDefinition","id":"sec-conditional-operator-static-semantics-isfunctiondefinition"},{"text":"Static Semantics:  IsValidSimpleAssignmentTarget","id":"sec-conditional-operator-static-semantics-isvalidsimpleassignmenttarget"},{"text":"Runtime Semantics: Evaluation","id":"sec-conditional-operator-runtime-semantics-evaluation"},{"text":"Assignment Operators","id":"sec-assignment-operators"},{"text":"Static Semantics:  Early Errors","id":"sec-assignment-operators-static-semantics-early-errors"},{"text":"Static Semantics:  IsFunctionDefinition","id":"sec-assignment-operators-static-semantics-isfunctiondefinition"},{"text":"Static Semantics:  IsValidSimpleAssignmentTarget","id":"sec-assignment-operators-static-semantics-isvalidsimpleassignmenttarget"},{"text":"Runtime Semantics: Evaluation","id":"sec-assignment-operators-runtime-semantics-evaluation"},{"text":"Destructuring Assignment","id":"sec-destructuring-assignment"},{"text":"Static Semantics:  Early Errors","id":"sec-destructuring-assignment-static-semantics-early-errors"},{"text":"Runtime Semantics: DestructuringAssignmentEvaluation","id":"sec-runtime-semantics-destructuringassignmentevaluation"},{"text":"Runtime Semantics: IteratorDestructuringAssignmentEvaluation","id":"sec-runtime-semantics-iteratordestructuringassignmentevaluation"},{"text":"Runtime Semantics: KeyedDestructuringAssignmentEvaluation","id":"sec-runtime-semantics-keyeddestructuringassignmentevaluation"},{"text":"Operator (","id":"sec-comma-operator"},{"text":"Static Semantics:  IsFunctionDefinition","id":"sec-comma-operator-static-semantics-isfunctiondefinition"},{"text":"Static Semantics:  IsValidSimpleAssignmentTarget","id":"sec-comma-operator-static-semantics-isvalidsimpleassignmenttarget"},{"text":"Runtime Semantics: Evaluation","id":"sec-comma-operator-runtime-semantics-evaluation"},{"text":"ECMAScript Language: Statements and Declarations","id":"sec-ecmascript-language-statements-and-declarations"},{"text":"Statement Semantics","id":"sec-statement-semantics"},{"text":"Static Semantics: ContainsDuplicateLabels","id":"sec-statement-semantics-static-semantics-containsduplicatelabels"},{"text":"Static Semantics: ContainsUndefinedBreakTarget","id":"sec-statement-semantics-static-semantics-containsundefinedbreaktarget"},{"text":"Static Semantics: ContainsUndefinedContinueTarget","id":"sec-statement-semantics-static-semantics-containsundefinedcontinuetarget"},{"text":"Static Semantics:  DeclarationPart","id":"sec-static-semantics-declarationpart"},{"text":"Static Semantics:  VarDeclaredNames","id":"sec-statement-semantics-static-semantics-vardeclarednames"},{"text":"Static Semantics:  VarScopedDeclarations","id":"sec-statement-semantics-static-semantics-varscopeddeclarations"},{"text":"Runtime Semantics: LabelledEvaluation","id":"sec-statement-semantics-runtime-semantics-labelledevaluation"},{"text":"Runtime Semantics: Evaluation","id":"sec-statement-semantics-runtime-semantics-evaluation"},{"text":"Block","id":"sec-block"},{"text":"Static Semantics:  Early Errors","id":"sec-block-static-semantics-early-errors"},{"text":"Static Semantics: ContainsDuplicateLabels","id":"sec-block-static-semantics-containsduplicatelabels"},{"text":"Static Semantics: ContainsUndefinedBreakTarget","id":"sec-block-static-semantics-containsundefinedbreaktarget"},{"text":"Static Semantics: ContainsUndefinedContinueTarget","id":"sec-block-static-semantics-containsundefinedcontinuetarget"},{"text":"Static Semantics:  LexicallyDeclaredNames","id":"sec-block-static-semantics-lexicallydeclarednames"},{"text":"Static Semantics:  LexicallyScopedDeclarations","id":"sec-block-static-semantics-lexicallyscopeddeclarations"},{"text":"Static Semantics:  TopLevelLexicallyDeclaredNames","id":"sec-block-static-semantics-toplevellexicallydeclarednames"},{"text":"Static Semantics:  TopLevelLexicallyScopedDeclarations","id":"sec-block-static-semantics-toplevellexicallyscopeddeclarations"},{"text":"Static Semantics:  TopLevelVarDeclaredNames","id":"sec-block-static-semantics-toplevelvardeclarednames"},{"text":"Static Semantics:  TopLevelVarScopedDeclarations","id":"sec-block-static-semantics-toplevelvarscopeddeclarations"},{"text":"Static Semantics:  VarDeclaredNames","id":"sec-block-static-semantics-vardeclarednames"},{"text":"Static Semantics:  VarScopedDeclarations","id":"sec-block-static-semantics-varscopeddeclarations"},{"text":"Runtime Semantics: Evaluation","id":"sec-block-runtime-semantics-evaluation"},{"text":"Runtime Semantics: BlockDeclarationInstantiation( code, env )","id":"sec-blockdeclarationinstantiation"},{"text":"Declarations and the Variable Statement","id":"sec-declarations-and-the-variable-statement"},{"text":"Let and Const Declarations","id":"sec-let-and-const-declarations"},{"text":"Static Semantics:  Early Errors","id":"sec-let-and-const-declarations-static-semantics-early-errors"},{"text":"Static Semantics:  BoundNames","id":"sec-let-and-const-declarations-static-semantics-boundnames"},{"text":"Static Semantics:  IsConstantDeclaration","id":"sec-let-and-const-declarations-static-semantics-isconstantdeclaration"},{"text":"Runtime Semantics: Evaluation","id":"sec-let-and-const-declarations-runtime-semantics-evaluation"},{"text":"Variable Statement","id":"sec-variable-statement"},{"text":"Static Semantics:  BoundNames","id":"sec-variable-statement-static-semantics-boundnames"},{"text":"Static Semantics:  VarDeclaredNames","id":"sec-variable-statement-static-semantics-vardeclarednames"},{"text":"Static Semantics:  VarScopedDeclarations","id":"sec-variable-statement-static-semantics-varscopeddeclarations"},{"text":"Runtime Semantics: Evaluation","id":"sec-variable-statement-runtime-semantics-evaluation"},{"text":"Destructuring Binding Patterns","id":"sec-destructuring-binding-patterns"},{"text":"Static Semantics:  BoundNames","id":"sec-destructuring-binding-patterns-static-semantics-boundnames"},{"text":"Static Semantics:  ContainsExpression","id":"sec-destructuring-binding-patterns-static-semantics-containsexpression"},{"text":"Static Semantics:  HasInitializer","id":"sec-destructuring-binding-patterns-static-semantics-hasinitializer"},{"text":"Static Semantics:  IsSimpleParameterList","id":"sec-destructuring-binding-patterns-static-semantics-issimpleparameterlist"},{"text":"Runtime Semantics: BindingInitialization","id":"sec-destructuring-binding-patterns-runtime-semantics-bindinginitialization"},{"text":"Runtime Semantics: IteratorBindingInitialization","id":"sec-destructuring-binding-patterns-runtime-semantics-iteratorbindinginitialization"},{"text":"Runtime Semantics: KeyedBindingInitialization","id":"sec-runtime-semantics-keyedbindinginitialization"},{"text":"Statement","id":"sec-empty-statement"},{"text":"Runtime Semantics: Evaluation","id":"sec-empty-statement-runtime-semantics-evaluation"},{"text":"Expression Statement","id":"sec-expression-statement"},{"text":"Runtime Semantics: Evaluation","id":"sec-expression-statement-runtime-semantics-evaluation"},{"text":"The","id":"sec-if-statement"},{"text":"Static Semantics:  Early Errors","id":"sec-if-statement-static-semantics-early-errors"},{"text":"Static Semantics: ContainsDuplicateLabels","id":"sec-if-statement-static-semantics-containsduplicatelabels"},{"text":"Static Semantics: ContainsUndefinedBreakTarget","id":"sec-if-statement-static-semantics-containsundefinedbreaktarget"},{"text":"Static Semantics: ContainsUndefinedContinueTarget","id":"sec-if-statement-static-semantics-containsundefinedcontinuetarget"},{"text":"Static Semantics:  VarDeclaredNames","id":"sec-if-statement-static-semantics-vardeclarednames"},{"text":"Static Semantics:  VarScopedDeclarations","id":"sec-if-statement-static-semantics-varscopeddeclarations"},{"text":"Runtime Semantics:  Evaluation","id":"sec-if-statement-runtime-semantics-evaluation"},{"text":"Iteration Statements","id":"sec-iteration-statements"},{"text":"Semantics","id":"sec-iteration-statements-semantics"},{"text":"Static Semantics:  Early Errors","id":"sec-semantics-static-semantics-early-errors"},{"text":"Runtime Semantics: LoopContinues(completion, labelSet)","id":"sec-loopcontinues"},{"text":"The","id":"sec-do-while-statement"},{"text":"Static Semantics: ContainsDuplicateLabels","id":"sec-do-while-statement-static-semantics-containsduplicatelabels"},{"text":"Static Semantics: ContainsUndefinedBreakTarget","id":"sec-do-while-statement-static-semantics-containsundefinedbreaktarget"},{"text":"Static Semantics: ContainsUndefinedContinueTarget","id":"sec-do-while-statement-static-semantics-containsundefinedcontinuetarget"},{"text":"Static Semantics:  VarDeclaredNames","id":"sec-do-while-statement-static-semantics-vardeclarednames"},{"text":"Static Semantics:  VarScopedDeclarations","id":"sec-do-while-statement-static-semantics-varscopeddeclarations"},{"text":"Runtime Semantics: LabelledEvaluation","id":"sec-do-while-statement-runtime-semantics-labelledevaluation"},{"text":"The","id":"sec-while-statement"},{"text":"Static Semantics: ContainsDuplicateLabels","id":"sec-while-statement-static-semantics-containsduplicatelabels"},{"text":"Static Semantics: ContainsUndefinedBreakTarget","id":"sec-while-statement-static-semantics-containsundefinedbreaktarget"},{"text":"Static Semantics: ContainsUndefinedContinueTarget","id":"sec-while-statement-static-semantics-containsundefinedcontinuetarget"},{"text":"Static Semantics:  VarDeclaredNames","id":"sec-while-statement-static-semantics-vardeclarednames"},{"text":"Static Semantics:  VarScopedDeclarations","id":"sec-while-statement-static-semantics-varscopeddeclarations"},{"text":"Runtime Semantics: LabelledEvaluation","id":"sec-while-statement-runtime-semantics-labelledevaluation"},{"text":"The","id":"sec-for-statement"},{"text":"Static Semantics:  Early Errors","id":"sec-for-statement-static-semantics-early-errors"},{"text":"Static Semantics: ContainsDuplicateLabels","id":"sec-for-statement-static-semantics-containsduplicatelabels"},{"text":"Static Semantics: ContainsUndefinedBreakTarget","id":"sec-for-statement-static-semantics-containsundefinedbreaktarget"},{"text":"Static Semantics: ContainsUndefinedContinueTarget","id":"sec-for-statement-static-semantics-containsundefinedcontinuetarget"},{"text":"Static Semantics:  VarDeclaredNames","id":"sec-for-statement-static-semantics-vardeclarednames"},{"text":"Static Semantics:  VarScopedDeclarations","id":"sec-for-statement-static-semantics-varscopeddeclarations"},{"text":"Runtime Semantics: LabelledEvaluation","id":"sec-for-statement-runtime-semantics-labelledevaluation"},{"text":"perIterationBindings, labelSet )","id":"sec-forbodyevaluation"},{"text":"perIterationBindings )","id":"sec-createperiterationenvironment"},{"text":"The","id":"sec-for-in-and-for-of-statements"},{"text":"Static Semantics:  Early Errors","id":"sec-for-in-and-for-of-statements-static-semantics-early-errors"},{"text":"Static Semantics:  BoundNames","id":"sec-for-in-and-for-of-statements-static-semantics-boundnames"},{"text":"Static Semantics: ContainsDuplicateLabels","id":"sec-for-in-and-for-of-statements-static-semantics-containsduplicatelabels"},{"text":"Static Semantics: ContainsUndefinedBreakTarget","id":"sec-for-in-and-for-of-statements-static-semantics-containsundefinedbreaktarget"},{"text":"Static Semantics: ContainsUndefinedContinueTarget","id":"sec-for-in-and-for-of-statements-static-semantics-containsundefinedcontinuetarget"},{"text":"Static Semantics:  IsDestructuring","id":"sec-for-in-and-for-of-statements-static-semantics-isdestructuring"},{"text":"Static Semantics:  VarDeclaredNames","id":"sec-for-in-and-for-of-statements-static-semantics-vardeclarednames"},{"text":"Static Semantics:  VarScopedDeclarations","id":"sec-for-in-and-for-of-statements-static-semantics-varscopeddeclarations"},{"text":"Runtime Semantics: BindingInitialization","id":"sec-for-in-and-for-of-statements-runtime-semantics-bindinginitialization"},{"text":"Runtime Semantics: BindingInstantiation","id":"sec-runtime-semantics-bindinginstantiation"},{"text":"Runtime Semantics: LabelledEvaluation","id":"sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation"},{"text":"iterationKind)","id":"sec-runtime-semantics-forin-div-ofheadevaluation-tdznames-expr-iterationkind"},{"text":"lhsKind, labelSet )","id":"sec-runtime-semantics-forin-div-ofbodyevaluation-lhs-stmt-iterator-lhskind-labelset"},{"text":"Runtime Semantics: Evaluation","id":"sec-for-in-and-for-of-statements-runtime-semantics-evaluation"},{"text":"The","id":"sec-continue-statement"},{"text":"Static Semantics:  Early Errors","id":"sec-continue-statement-static-semantics-early-errors"},{"text":"Static Semantics: ContainsUndefinedContinueTarget","id":"sec-continue-statement-static-semantics-containsundefinedcontinuetarget"},{"text":"Runtime Semantics: Evaluation","id":"sec-continue-statement-runtime-semantics-evaluation"},{"text":"The","id":"sec-break-statement"},{"text":"Static Semantics:  Early Errors","id":"sec-break-statement-static-semantics-early-errors"},{"text":"Static Semantics: ContainsUndefinedBreakTarget","id":"sec-break-statement-static-semantics-containsundefinedbreaktarget"},{"text":"Runtime Semantics: Evaluation","id":"sec-break-statement-runtime-semantics-evaluation"},{"text":"The","id":"sec-return-statement"},{"text":"Runtime Semantics: Evaluation","id":"sec-return-statement-runtime-semantics-evaluation"},{"text":"The","id":"sec-with-statement"},{"text":"Static Semantics:  Early Errors","id":"sec-with-statement-static-semantics-early-errors"},{"text":"Static Semantics: ContainsDuplicateLabels","id":"sec-with-statement-static-semantics-containsduplicatelabels"},{"text":"Static Semantics: ContainsUndefinedBreakTarget","id":"sec-with-statement-static-semantics-containsundefinedbreaktarget"},{"text":"Static Semantics: ContainsUndefinedContinueTarget","id":"sec-with-statement-static-semantics-containsundefinedcontinuetarget"},{"text":"Static Semantics:  VarDeclaredNames","id":"sec-with-statement-static-semantics-vardeclarednames"},{"text":"Static Semantics:  VarScopedDeclarations","id":"sec-with-statement-static-semantics-varscopeddeclarations"},{"text":"Runtime Semantics: Evaluation","id":"sec-with-statement-runtime-semantics-evaluation"},{"text":"The","id":"sec-switch-statement"},{"text":"Static Semantics:  Early Errors","id":"sec-switch-statement-static-semantics-early-errors"},{"text":"Static Semantics: ContainsDuplicateLabels","id":"sec-switch-statement-static-semantics-containsduplicatelabels"},{"text":"Static Semantics: ContainsUndefinedBreakTarget","id":"sec-switch-statement-static-semantics-containsundefinedbreaktarget"},{"text":"Static Semantics: ContainsUndefinedContinueTarget","id":"sec-switch-statement-static-semantics-containsundefinedcontinuetarget"},{"text":"Static Semantics:  LexicallyDeclaredNames","id":"sec-switch-statement-static-semantics-lexicallydeclarednames"},{"text":"Static Semantics:  LexicallyScopedDeclarations","id":"sec-switch-statement-static-semantics-lexicallyscopeddeclarations"},{"text":"Static Semantics:  VarDeclaredNames","id":"sec-switch-statement-static-semantics-vardeclarednames"},{"text":"Static Semantics:  VarScopedDeclarations","id":"sec-switch-statement-static-semantics-varscopeddeclarations"},{"text":"Runtime Semantics: CaseBlockEvaluation","id":"sec-runtime-semantics-caseblockevaluation"},{"text":"Runtime Semantics: CaseSelectorEvaluation","id":"sec-runtime-semantics-caseselectorevaluation"},{"text":"Runtime Semantics: Evaluation","id":"sec-switch-statement-runtime-semantics-evaluation"},{"text":"Labelled Statements","id":"sec-labelled-statements"},{"text":"Static Semantics:  Early Errors","id":"sec-labelled-statements-static-semantics-early-errors"},{"text":"Static Semantics: ContainsDuplicateLabels","id":"sec-labelled-statements-static-semantics-containsduplicatelabels"},{"text":"Static Semantics: ContainsUndefinedBreakTarget","id":"sec-labelled-statements-static-semantics-containsundefinedbreaktarget"},{"text":"Static Semantics: ContainsUndefinedContinueTarget","id":"sec-labelled-statements-static-semantics-containsundefinedcontinuetarget"},{"text":"Static Semantics:  IsLabelledFunction ( stmt )","id":"sec-islabelledfunction"},{"text":"Static Semantics:  LexicallyDeclaredNames","id":"sec-labelled-statements-static-semantics-lexicallydeclarednames"},{"text":"Static Semantics:  LexicallyScopedDeclarations","id":"sec-labelled-statements-static-semantics-lexicallyscopeddeclarations"},{"text":"Static Semantics:  TopLevelLexicallyDeclaredNames","id":"sec-labelled-statements-static-semantics-toplevellexicallydeclarednames"},{"text":"Static Semantics:  TopLevelLexicallyScopedDeclarations","id":"sec-labelled-statements-static-semantics-toplevellexicallyscopeddeclarations"},{"text":"Static Semantics:  TopLevelVarDeclaredNames","id":"sec-labelled-statements-static-semantics-toplevelvardeclarednames"},{"text":"Static Semantics:  TopLevelVarScopedDeclarations","id":"sec-labelled-statements-static-semantics-toplevelvarscopeddeclarations"},{"text":"Static Semantics:  VarDeclaredNames","id":"sec-labelled-statements-static-semantics-vardeclarednames"},{"text":"Static Semantics:  VarScopedDeclarations","id":"sec-labelled-statements-static-semantics-varscopeddeclarations"},{"text":"Runtime Semantics: LabelledEvaluation","id":"sec-labelled-statements-runtime-semantics-labelledevaluation"},{"text":"Runtime Semantics: Evaluation","id":"sec-labelled-statements-runtime-semantics-evaluation"},{"text":"The","id":"sec-throw-statement"},{"text":"Runtime Semantics: Evaluation","id":"sec-throw-statement-runtime-semantics-evaluation"},{"text":"The","id":"sec-try-statement"},{"text":"Static Semantics:  Early Errors","id":"sec-try-statement-static-semantics-early-errors"},{"text":"Static Semantics: ContainsDuplicateLabels","id":"sec-try-statement-static-semantics-containsduplicatelabels"},{"text":"Static Semantics: ContainsUndefinedBreakTarget","id":"sec-try-statement-static-semantics-containsundefinedbreaktarget"},{"text":"Static Semantics: ContainsUndefinedContinueTarget","id":"sec-try-statement-static-semantics-containsundefinedcontinuetarget"},{"text":"Static Semantics:  VarDeclaredNames","id":"sec-try-statement-static-semantics-vardeclarednames"},{"text":"Static Semantics:  VarScopedDeclarations","id":"sec-try-statement-static-semantics-varscopeddeclarations"},{"text":"Runtime Semantics: CatchClauseEvaluation","id":"sec-runtime-semantics-catchclauseevaluation"},{"text":"Runtime Semantics: Evaluation","id":"sec-try-statement-runtime-semantics-evaluation"},{"text":"The","id":"sec-debugger-statement"},{"text":"Runtime Semantics: Evaluation","id":"sec-debugger-statement-runtime-semantics-evaluation"},{"text":"ECMAScript Language: Functions and Classes","id":"sec-ecmascript-language-functions-and-classes"},{"text":"Function Definitions","id":"sec-function-definitions"},{"text":"Directive Prologues and the Use Strict Directive","id":"sec-directive-prologues-and-the-use-strict-directive"},{"text":"Static Semantics:  Early Errors","id":"sec-function-definitions-static-semantics-early-errors"},{"text":"Static Semantics:  BoundNames","id":"sec-function-definitions-static-semantics-boundnames"},{"text":"Static Semantics:  Contains","id":"sec-function-definitions-static-semantics-contains"},{"text":"Static Semantics:  ContainsExpression","id":"sec-function-definitions-static-semantics-containsexpression"},{"text":"Static Semantics:  ExpectedArgumentCount","id":"sec-function-definitions-static-semantics-expectedargumentcount"},{"text":"Static Semantics:  HasInitializer","id":"sec-function-definitions-static-semantics-hasinitializer"},{"text":"Static Semantics:  HasName","id":"sec-function-definitions-static-semantics-hasname"},{"text":"Static Semantics:  IsAnonymousFunctionDefinition ( production )","id":"sec-isanonymousfunctiondefinition"},{"text":"Static Semantics:  IsConstantDeclaration","id":"sec-function-definitions-static-semantics-isconstantdeclaration"},{"text":"Static Semantics:  IsFunctionDefinition","id":"sec-function-definitions-static-semantics-isfunctiondefinition"},{"text":"Static Semantics:  IsSimpleParameterList","id":"sec-function-definitions-static-semantics-issimpleparameterlist"},{"text":"Static Semantics:  LexicallyDeclaredNames","id":"sec-function-definitions-static-semantics-lexicallydeclarednames"},{"text":"Static Semantics:  LexicallyScopedDeclarations","id":"sec-function-definitions-static-semantics-lexicallyscopeddeclarations"},{"text":"Static Semantics:  VarDeclaredNames","id":"sec-function-definitions-static-semantics-vardeclarednames"},{"text":"Static Semantics:  VarScopedDeclarations","id":"sec-function-definitions-static-semantics-varscopeddeclarations"},{"text":"Runtime Semantics: EvaluateBody","id":"sec-function-definitions-runtime-semantics-evaluatebody"},{"text":"Runtime Semantics: IteratorBindingInitialization","id":"sec-function-definitions-runtime-semantics-iteratorbindinginitialization"},{"text":"Runtime Semantics: InstantiateFunctionObject","id":"sec-function-definitions-runtime-semantics-instantiatefunctionobject"},{"text":"Runtime Semantics: Evaluation","id":"sec-function-definitions-runtime-semantics-evaluation"},{"text":"Arrow Function Definitions","id":"sec-arrow-function-definitions"},{"text":"Static Semantics:  Early Errors","id":"sec-arrow-function-definitions-static-semantics-early-errors"},{"text":"Static Semantics:  BoundNames","id":"sec-arrow-function-definitions-static-semantics-boundnames"},{"text":"Static Semantics:  Contains","id":"sec-arrow-function-definitions-static-semantics-contains"},{"text":"Static Semantics:  ContainsExpression","id":"sec-arrow-function-definitions-static-semantics-containsexpression"},{"text":"Static Semantics:  ExpectedArgumentCount","id":"sec-arrow-function-definitions-static-semantics-expectedargumentcount"},{"text":"Static Semantics:  HasInitializer","id":"sec-arrow-function-definitions-static-semantics-hasinitializer"},{"text":"Static Semantics:  HasName","id":"sec-arrow-function-definitions-static-semantics-hasname"},{"text":"Static Semantics:  IsSimpleParameterList","id":"sec-arrow-function-definitions-static-semantics-issimpleparameterlist"},{"text":"Static Semantics:  CoveredFormalsList","id":"sec-static-semantics-coveredformalslist"},{"text":"Static Semantics:  LexicallyDeclaredNames","id":"sec-arrow-function-definitions-static-semantics-lexicallydeclarednames"},{"text":"Static Semantics:  LexicallyScopedDeclarations","id":"sec-arrow-function-definitions-static-semantics-lexicallyscopeddeclarations"},{"text":"Static Semantics:  VarDeclaredNames","id":"sec-arrow-function-definitions-static-semantics-vardeclarednames"},{"text":"Static Semantics:  VarScopedDeclarations","id":"sec-arrow-function-definitions-static-semantics-varscopeddeclarations"},{"text":"Runtime Semantics: IteratorBindingInitialization","id":"sec-arrow-function-definitions-runtime-semantics-iteratorbindinginitialization"},{"text":"Runtime Semantics: EvaluateBody","id":"sec-arrow-function-definitions-runtime-semantics-evaluatebody"},{"text":"Runtime Semantics: Evaluation","id":"sec-arrow-function-definitions-runtime-semantics-evaluation"},{"text":"Definitions","id":"sec-method-definitions"},{"text":"Static Semantics:  Early Errors","id":"sec-method-definitions-static-semantics-early-errors"},{"text":"Static Semantics:  ComputedPropertyContains","id":"sec-method-definitions-static-semantics-computedpropertycontains"},{"text":"Static Semantics:  ExpectedArgumentCount","id":"sec-method-definitions-static-semantics-expectedargumentcount"},{"text":"Static Semantics:  HasComputedPropertyKey","id":"sec-method-definitions-static-semantics-hascomputedpropertykey"},{"text":"Static Semantics:  HasDirectSuper","id":"sec-method-definitions-static-semantics-hasdirectsuper"},{"text":"Static Semantics:  PropName","id":"sec-method-definitions-static-semantics-propname"},{"text":"Static Semantics:  SpecialMethod","id":"sec-static-semantics-specialmethod"},{"text":"Runtime Semantics: DefineMethod","id":"sec-runtime-semantics-definemethod"},{"text":"Runtime Semantics: PropertyDefinitionEvaluation","id":"sec-method-definitions-runtime-semantics-propertydefinitionevaluation"},{"text":"Generator Function Definitions","id":"sec-generator-function-definitions"},{"text":"Static Semantics:  Early Errors","id":"sec-generator-function-definitions-static-semantics-early-errors"},{"text":"Static Semantics:  BoundNames","id":"sec-generator-function-definitions-static-semantics-boundnames"},{"text":"Static Semantics:  ComputedPropertyContains","id":"sec-generator-function-definitions-static-semantics-computedpropertycontains"},{"text":"Static Semantics:  Contains","id":"sec-generator-function-definitions-static-semantics-contains"},{"text":"Static Semantics:  HasComputedPropertyKey","id":"sec-generator-function-definitions-static-semantics-hascomputedpropertykey"},{"text":"Static Semantics:  HasDirectSuper","id":"sec-generator-function-definitions-static-semantics-hasdirectsuper"},{"text":"Static Semantics:  HasName","id":"sec-generator-function-definitions-static-semantics-hasname"},{"text":"Static Semantics:  IsConstantDeclaration","id":"sec-generator-function-definitions-static-semantics-isconstantdeclaration"},{"text":"Static Semantics:  IsFunctionDefinition","id":"sec-generator-function-definitions-static-semantics-isfunctiondefinition"},{"text":"Static Semantics:  PropName","id":"sec-generator-function-definitions-static-semantics-propname"},{"text":"Runtime Semantics: EvaluateBody","id":"sec-generator-function-definitions-runtime-semantics-evaluatebody"},{"text":"Runtime Semantics: InstantiateFunctionObject","id":"sec-generator-function-definitions-runtime-semantics-instantiatefunctionobject"},{"text":"Runtime Semantics: PropertyDefinitionEvaluation","id":"sec-generator-function-definitions-runtime-semantics-propertydefinitionevaluation"},{"text":"Runtime Semantics: Evaluation","id":"sec-generator-function-definitions-runtime-semantics-evaluation"},{"text":"Definitions","id":"sec-class-definitions"},{"text":"Static Semantics:  Early Errors","id":"sec-class-definitions-static-semantics-early-errors"},{"text":"Static Semantics:  BoundNames","id":"sec-class-definitions-static-semantics-boundnames"},{"text":"Static Semantics:  ConstructorMethod","id":"sec-static-semantics-constructormethod"},{"text":"Static Semantics:  Contains","id":"sec-class-definitions-static-semantics-contains"},{"text":"Static Semantics:  ComputedPropertyContains","id":"sec-class-definitions-static-semantics-computedpropertycontains"},{"text":"Static Semantics:  HasName","id":"sec-class-definitions-static-semantics-hasname"},{"text":"Static Semantics:  IsConstantDeclaration","id":"sec-class-definitions-static-semantics-isconstantdeclaration"},{"text":"Static Semantics:  IsFunctionDefinition","id":"sec-class-definitions-static-semantics-isfunctiondefinition"},{"text":"Static Semantics:  IsStatic","id":"sec-static-semantics-isstatic"},{"text":"Static Semantics:  NonConstructorMethodDefinitions","id":"sec-static-semantics-nonconstructormethoddefinitions"},{"text":"Static Semantics:  PrototypePropertyNameList","id":"sec-static-semantics-prototypepropertynamelist"},{"text":"Static Semantics:  PropName","id":"sec-class-definitions-static-semantics-propname"},{"text":"Static Semantics:  StaticPropertyNameList","id":"sec-static-semantics-staticpropertynamelist"},{"text":"Runtime Semantics: ClassDefinitionEvaluation","id":"sec-runtime-semantics-classdefinitionevaluation"},{"text":"Runtime Semantics: BindingClassDeclarationEvaluation","id":"sec-runtime-semantics-bindingclassdeclarationevaluation"},{"text":"Runtime Semantics: Evaluation","id":"sec-class-definitions-runtime-semantics-evaluation"},{"text":"Position Calls","id":"sec-tail-position-calls"},{"text":"Static Semantics: IsInTailPosition(nonterminal)","id":"sec-isintailposition"},{"text":"Static Semantics: HasProductionInTailPosition","id":"sec-static-semantics-hasproductionintailposition"},{"text":"Statement Rules","id":"sec-statement-rules"},{"text":"Expression Rules","id":"sec-expression-rules"},{"text":"Runtime Semantics: PrepareForTailCall ( )","id":"sec-preparefortailcall"},{"text":"ECMAScript Language: Scripts and Modules","id":"sec-ecmascript-language-scripts-and-modules"},{"text":"Scripts","id":"sec-scripts"},{"text":"Static Semantics:  Early Errors","id":"sec-scripts-static-semantics-early-errors"},{"text":"Static Semantics:  IsStrict","id":"sec-static-semantics-isstrict"},{"text":"Static Semantics:  LexicallyDeclaredNames","id":"sec-scripts-static-semantics-lexicallydeclarednames"},{"text":"Static Semantics:  LexicallyScopedDeclarations","id":"sec-scripts-static-semantics-lexicallyscopeddeclarations"},{"text":"Static Semantics:  VarDeclaredNames","id":"sec-scripts-static-semantics-vardeclarednames"},{"text":"Static Semantics:  VarScopedDeclarations","id":"sec-scripts-static-semantics-varscopeddeclarations"},{"text":"Runtime Semantics: ScriptEvaluation","id":"sec-runtime-semantics-scriptevaluation"},{"text":"Runtime Semantics: GlobalDeclarationInstantiation (script, env)","id":"sec-globaldeclarationinstantiation"},{"text":"Runtime Semantics: ScriptEvaluationJob ( sourceText )","id":"sec-scriptevaluationjob"},{"text":"Modules","id":"sec-modules"},{"text":"Module Semantics","id":"sec-module-semantics"},{"text":"Static Semantics:  Early Errors","id":"sec-module-semantics-static-semantics-early-errors"},{"text":"Static Semantics:  ContainsDuplicateLabels","id":"sec-module-semantics-static-semantics-containsduplicatelabels"},{"text":"Static Semantics:  ContainsUndefinedBreakTarget","id":"sec-module-semantics-static-semantics-containsundefinedbreaktarget"},{"text":"Static Semantics:  ContainsUndefinedContinueTarget","id":"sec-module-semantics-static-semantics-containsundefinedcontinuetarget"},{"text":"Static Semantics:  ExportedBindings","id":"sec-module-semantics-static-semantics-exportedbindings"},{"text":"Static Semantics:  ExportedNames","id":"sec-module-semantics-static-semantics-exportednames"},{"text":"Static Semantics:  ExportEntries","id":"sec-module-semantics-static-semantics-exportentries"},{"text":"Static Semantics:  ImportEntries","id":"sec-module-semantics-static-semantics-importentries"},{"text":"Static Semantics:  ImportedLocalNames ( importEntries )","id":"sec-importedlocalnames"},{"text":"Static Semantics:  ModuleRequests","id":"sec-module-semantics-static-semantics-modulerequests"},{"text":"Static Semantics:  LexicallyDeclaredNames","id":"sec-module-semantics-static-semantics-lexicallydeclarednames"},{"text":"Static Semantics:  LexicallyScopedDeclarations","id":"sec-module-semantics-static-semantics-lexicallyscopeddeclarations"},{"text":"Static Semantics:  VarDeclaredNames","id":"sec-module-semantics-static-semantics-vardeclarednames"},{"text":"Static Semantics:  VarScopedDeclarations","id":"sec-module-semantics-static-semantics-varscopeddeclarations"},{"text":"Abstract Module Records","id":"sec-abstract-module-records"},{"text":"Source Text Module Records","id":"sec-source-text-module-records"},{"text":"Runtime Semantics: ParseModule ( sourceText )","id":"sec-parsemodule"},{"text":"GetExportedNames( exportStarSet ) Concrete Method","id":"sec-getexportednames"},{"text":"Method","id":"sec-resolveexport"},{"text":"ModuleDeclarationInstantiation( ) Concrete Method","id":"sec-moduledeclarationinstantiation"},{"text":"ModuleEvaluation() Concrete Method","id":"sec-moduleevaluation"},{"text":"specifier )","id":"sec-hostresolveimportedmodule"},{"text":"Runtime Semantics: GetModuleNamespace( module )","id":"sec-getmodulenamespace"},{"text":"Runtime Semantics: TopLevelModuleEvaluationJob ( sourceText)","id":"sec-toplevelmoduleevaluationjob"},{"text":"Runtime Semantics: Evaluation","id":"sec-module-semantics-runtime-semantics-evaluation"},{"text":"Imports","id":"sec-imports"},{"text":"Static Semantics: Early Errors","id":"sec-imports-static-semantics-early-errors"},{"text":"Static Semantics: BoundNames","id":"sec-imports-static-semantics-boundnames"},{"text":"Static Semantics: ImportEntries","id":"sec-imports-static-semantics-importentries"},{"text":"Static Semantics: ImportEntriesForModule","id":"sec-static-semantics-importentriesformodule"},{"text":"Static Semantics: ModuleRequests","id":"sec-imports-static-semantics-modulerequests"},{"text":"Exports","id":"sec-exports"},{"text":"Static Semantics:  Early Errors","id":"sec-exports-static-semantics-early-errors"},{"text":"Static Semantics: BoundNames","id":"sec-exports-static-semantics-boundnames"},{"text":"Static Semantics:  ExportedBindings","id":"sec-exports-static-semantics-exportedbindings"},{"text":"Static Semantics:  ExportedNames","id":"sec-exports-static-semantics-exportednames"},{"text":"Static Semantics:  ExportEntries","id":"sec-exports-static-semantics-exportentries"},{"text":"Static Semantics: ExportEntriesForModule","id":"sec-static-semantics-exportentriesformodule"},{"text":"Static Semantics:  IsConstantDeclaration","id":"sec-exports-static-semantics-isconstantdeclaration"},{"text":"Static Semantics:  LexicallyScopedDeclarations","id":"sec-exports-static-semantics-lexicallyscopeddeclarations"},{"text":"Static Semantics: ModuleRequests","id":"sec-exports-static-semantics-modulerequests"},{"text":"Static Semantics:  ReferencedBindings","id":"sec-static-semantics-referencedbindings"},{"text":"Runtime Semantics: Evaluation","id":"sec-exports-runtime-semantics-evaluation"},{"text":"Error Handling and Language Extensions","id":"sec-error-handling-and-language-extensions"},{"text":"Forbidden Extensions","id":"sec-forbidden-extensions"},{"text":"ECMAScript Standard Built-in Objects","id":"sec-ecmascript-standard-built-in-objects"},{"text":"Object","id":"sec-global-object"},{"text":"Value Properties of the Global Object","id":"sec-value-properties-of-the-global-object"},{"text":"Infinity","id":"sec-value-properties-of-the-global-object-infinity"},{"text":"NaN","id":"sec-value-properties-of-the-global-object-nan"},{"text":"undefined","id":"sec-undefined"},{"text":"Function Properties of the Global Object","id":"sec-function-properties-of-the-global-object"},{"text":"(x)","id":"sec-eval-x"},{"text":"Runtime Semantics: PerformEval( x, evalRealm, strictCaller, direct)","id":"sec-performeval"},{"text":"lexEnv, strict)","id":"sec-evaldeclarationinstantiation"},{"text":"isFinite (number)","id":"sec-isfinite-number"},{"text":"(number)","id":"sec-isnan-number"},{"text":"parseFloat (string)","id":"sec-parsefloat-string"},{"text":"parseInt (string , radix)","id":"sec-parseint-string-radix"},{"text":"URI Handling Functions","id":"sec-uri-handling-functions"},{"text":"URI Syntax and Semantics","id":"sec-uri-syntax-and-semantics"},{"text":"Runtime Semantics: Encode ( string, unescapedSet )","id":"sec-encode"},{"text":"Runtime Semantics: Decode ( string, reservedSet )","id":"sec-decode"},{"text":"decodeURI (encodedURI)","id":"sec-decodeuri-encodeduri"},{"text":"decodeURIComponent (encodedURIComponent)","id":"sec-decodeuricomponent-encodeduricomponent"},{"text":"encodeURI (uri)","id":"sec-encodeuri-uri"},{"text":"encodeURIComponent (uriComponent)","id":"sec-encodeuricomponent-uricomponent"},{"text":"Constructor Properties of the Global Object","id":"sec-constructor-properties-of-the-global-object"},{"text":"Array ( . . . )","id":"sec-constructor-properties-of-the-global-object-array"},{"text":"ArrayBuffer ( . . . )","id":"sec-constructor-properties-of-the-global-object-arraybuffer"},{"text":"Boolean ( . . . )","id":"sec-constructor-properties-of-the-global-object-boolean"},{"text":"DataView ( . . . )","id":"sec-constructor-properties-of-the-global-object-dataview"},{"text":"Date ( . . . )","id":"sec-constructor-properties-of-the-global-object-date"},{"text":"Error ( . . . )","id":"sec-constructor-properties-of-the-global-object-error"},{"text":"EvalError ( . . . )","id":"sec-constructor-properties-of-the-global-object-evalerror"},{"text":"Float32Array ( . . . )","id":"sec-float32array"},{"text":"Float64Array ( . . . )","id":"sec-float64array"},{"text":"Function ( . . . )","id":"sec-constructor-properties-of-the-global-object-function"},{"text":"( . . . )","id":"sec-int8array"},{"text":"Int16Array ( . . . )","id":"sec-int16array"},{"text":"Int32Array ( . . . )","id":"sec-int32array"},{"text":")","id":"sec-map"},{"text":"Number ( . . . )","id":"sec-constructor-properties-of-the-global-object-number"},{"text":"Object ( . . . )","id":"sec-constructor-properties-of-the-global-object-object"},{"text":"Proxy ( . . . )","id":"sec-constructor-properties-of-the-global-object-proxy"},{"text":"Promise ( . . . )","id":"sec-constructor-properties-of-the-global-object-promise"},{"text":"RangeError ( . . . )","id":"sec-constructor-properties-of-the-global-object-rangeerror"},{"text":"ReferenceError ( . . . )","id":"sec-constructor-properties-of-the-global-object-referenceerror"},{"text":"RegExp ( . . . )","id":"sec-constructor-properties-of-the-global-object-regexp"},{"text":")","id":"sec-set"},{"text":"String ( . . . )","id":"sec-constructor-properties-of-the-global-object-string"},{"text":"Symbol ( . . . )","id":"sec-constructor-properties-of-the-global-object-symbol"},{"text":"SyntaxError ( . . . )","id":"sec-constructor-properties-of-the-global-object-syntaxerror"},{"text":"TypeError ( . . . )","id":"sec-constructor-properties-of-the-global-object-typeerror"},{"text":"Uint8Array ( . . . )","id":"sec-uint8array"},{"text":"Uint8ClampedArray ( . . . )","id":"sec-uint8clampedarray"},{"text":"Uint16Array ( . . . )","id":"sec-uint16array"},{"text":"Uint32Array ( . . . )","id":"sec-uint32array"},{"text":"URIError ( . . . )","id":"sec-constructor-properties-of-the-global-object-urierror"},{"text":"WeakMap ( . . . )","id":"sec-constructor-properties-of-the-global-object-weakmap"},{"text":"WeakSet ( . . . )","id":"sec-constructor-properties-of-the-global-object-weakset"},{"text":"Other Properties of the Global Object","id":"sec-other-properties-of-the-global-object"},{"text":"JSON","id":"sec-json"},{"text":"Math","id":"sec-math"},{"text":"Reflect","id":"sec-reflect"},{"text":"Objects","id":"sec-fundamental-objects"},{"text":"Objects","id":"sec-object-objects"},{"text":"The Object Constructor","id":"sec-object-constructor"},{"text":"Object ( [ value ] )","id":"sec-object-value"},{"text":"Properties of the Object Constructor","id":"sec-properties-of-the-object-constructor"},{"text":"Object.assign ( target, ...sources )","id":"sec-object.assign"},{"text":"Object.create ( O [ , Properties ] )","id":"sec-object.create"},{"text":"Object.defineProperties ( O, Properties )","id":"sec-object.defineproperties"},{"text":"Runtime Semantics: ObjectDefineProperties ( O, Properties )","id":"sec-objectdefineproperties"},{"text":"Object.defineProperty ( O, P, Attributes )","id":"sec-object.defineproperty"},{"text":"Object.freeze ( O )","id":"sec-object.freeze"},{"text":"Object.getOwnPropertyDescriptor ( O, P )","id":"sec-object.getownpropertydescriptor"},{"text":"Object.getOwnPropertyNames ( O )","id":"sec-object.getownpropertynames"},{"text":"Object.getOwnPropertySymbols ( O )","id":"sec-object.getownpropertysymbols"},{"text":"Runtime Semantics:  GetOwnPropertyKeys ( O, Type )","id":"sec-getownpropertykeys"},{"text":"Object.getPrototypeOf ( O )","id":"sec-object.getprototypeof"},{"text":"Object.is ( value1, value2 )","id":"sec-object.is"},{"text":"Object.isExtensible ( O )","id":"sec-object.isextensible"},{"text":"Object.isFrozen ( O )","id":"sec-object.isfrozen"},{"text":"Object.isSealed ( O )","id":"sec-object.issealed"},{"text":"Object.keys ( O )","id":"sec-object.keys"},{"text":"Object.preventExtensions ( O )","id":"sec-object.preventextensions"},{"text":"Object.prototype","id":"sec-object.prototype"},{"text":"Object.seal ( O )","id":"sec-object.seal"},{"text":"Object.setPrototypeOf ( O, proto )","id":"sec-object.setprototypeof"},{"text":"Properties of the Object Prototype Object","id":"sec-properties-of-the-object-prototype-object"},{"text":"Object.prototype.constructor","id":"sec-object.prototype.constructor"},{"text":"Object.prototype.hasOwnProperty ( V )","id":"sec-object.prototype.hasownproperty"},{"text":"Object.prototype.isPrototypeOf ( V )","id":"sec-object.prototype.isprototypeof"},{"text":"Object.prototype.propertyIsEnumerable ( V )","id":"sec-object.prototype.propertyisenumerable"},{"text":")","id":"sec-object.prototype.tolocalestring"},{"text":"Object.prototype.toString ( )","id":"sec-object.prototype.tostring"},{"text":"Object.prototype.valueOf ( )","id":"sec-object.prototype.valueof"},{"text":"Properties of Object Instances","id":"sec-properties-of-object-instances"},{"text":"Objects","id":"sec-function-objects"},{"text":"The Function Constructor","id":"sec-function-constructor"},{"text":"Function ( p1, p2, … , pn, body )","id":"sec-function-p1-p2-pn-body"},{"text":"kind, args)","id":"sec-createdynamicfunction"},{"text":"Properties of the Function Constructor","id":"sec-properties-of-the-function-constructor"},{"text":"Function.length","id":"sec-function.length"},{"text":"Function.prototype","id":"sec-function.prototype"},{"text":"Properties of the Function Prototype Object","id":"sec-properties-of-the-function-prototype-object"},{"text":"Function.prototype.apply ( thisArg, argArray )","id":"sec-function.prototype.apply"},{"text":"Function.prototype.bind ( thisArg , ...args)","id":"sec-function.prototype.bind"},{"text":"Function.prototype.call (thisArg , ...args)","id":"sec-function.prototype.call"},{"text":"Function.prototype.constructor","id":"sec-function.prototype.constructor"},{"text":"Function.prototype.toString ( )","id":"sec-function.prototype.tostring"},{"text":"Function.prototype[@@hasInstance] ( V )","id":"sec-function.prototype-@@hasinstance"},{"text":"Function Instances","id":"sec-function-instances"},{"text":"length","id":"sec-function-instances-length"},{"text":"name","id":"sec-function-instances-name"},{"text":"prototype","id":"sec-function-instances-prototype"},{"text":"Objects","id":"sec-boolean-objects"},{"text":"The Boolean Constructor","id":"sec-boolean-constructor"},{"text":"Boolean ( value )","id":"sec-boolean-constructor-boolean-value"},{"text":"Properties of the Boolean Constructor","id":"sec-properties-of-the-boolean-constructor"},{"text":"Boolean.prototype","id":"sec-boolean.prototype"},{"text":"Properties of the Boolean Prototype Object","id":"sec-properties-of-the-boolean-prototype-object"},{"text":"Boolean.prototype.constructor","id":"sec-boolean.prototype.constructor"},{"text":"Boolean.prototype.toString ( )","id":"sec-boolean.prototype.tostring"},{"text":"Boolean.prototype.valueOf ( )","id":"sec-boolean.prototype.valueof"},{"text":"Properties of Boolean Instances","id":"sec-properties-of-boolean-instances"},{"text":"Objects","id":"sec-symbol-objects"},{"text":"The Symbol Constructor","id":"sec-symbol-constructor"},{"text":"Symbol ( [ description ] )","id":"sec-symbol-description"},{"text":"Properties of the Symbol Constructor","id":"sec-properties-of-the-symbol-constructor"},{"text":"Symbol.for ( key )","id":"sec-symbol.for"},{"text":"Symbol.hasInstance","id":"sec-symbol.hasinstance"},{"text":"Symbol.isConcatSpreadable","id":"sec-symbol.isconcatspreadable"},{"text":"Symbol.iterator","id":"sec-symbol.iterator"},{"text":"Symbol.keyFor ( sym )","id":"sec-symbol.keyfor"},{"text":"Symbol.match","id":"sec-symbol.match"},{"text":"Symbol.prototype","id":"sec-symbol.prototype"},{"text":"Symbol.replace","id":"sec-symbol.replace"},{"text":"Symbol.search","id":"sec-symbol.search"},{"text":"Symbol.species","id":"sec-symbol.species"},{"text":"Symbol.split","id":"sec-symbol.split"},{"text":"Symbol.toPrimitive","id":"sec-symbol.toprimitive"},{"text":"Symbol.toStringTag","id":"sec-symbol.tostringtag"},{"text":"Symbol.unscopables","id":"sec-symbol.unscopables"},{"text":"Properties of the Symbol Prototype Object","id":"sec-properties-of-the-symbol-prototype-object"},{"text":"Symbol.prototype.constructor","id":"sec-symbol.prototype.constructor"},{"text":"Symbol.prototype.toString ( )","id":"sec-symbol.prototype.tostring"},{"text":"Runtime Semantics:  SymbolDescriptiveString ( sym )","id":"sec-symboldescriptivestring"},{"text":"Symbol.prototype.valueOf ( )","id":"sec-symbol.prototype.valueof"},{"text":"Symbol.prototype [ @@toPrimitive ] ( hint )","id":"sec-symbol.prototype-@@toprimitive"},{"text":"Symbol.prototype [ @@toStringTag ]","id":"sec-symbol.prototype-@@tostringtag"},{"text":"Properties of Symbol Instances","id":"sec-properties-of-symbol-instances"},{"text":"Objects","id":"sec-error-objects"},{"text":"The Error Constructor","id":"sec-error-constructor"},{"text":"Error ( message )","id":"sec-error-message"},{"text":"Properties of the Error Constructor","id":"sec-properties-of-the-error-constructor"},{"text":"Error.prototype","id":"sec-error.prototype"},{"text":"Properties of the Error Prototype Object","id":"sec-properties-of-the-error-prototype-object"},{"text":"Error.prototype.constructor","id":"sec-error.prototype.constructor"},{"text":"Error.prototype.message","id":"sec-error.prototype.message"},{"text":"Error.prototype.name","id":"sec-error.prototype.name"},{"text":"Error.prototype.toString ( )","id":"sec-error.prototype.tostring"},{"text":"Properties of Error Instances","id":"sec-properties-of-error-instances"},{"text":"Native Error Types Used in This Standard","id":"sec-native-error-types-used-in-this-standard"},{"text":"EvalError","id":"sec-native-error-types-used-in-this-standard-evalerror"},{"text":"RangeError","id":"sec-native-error-types-used-in-this-standard-rangeerror"},{"text":"ReferenceError","id":"sec-native-error-types-used-in-this-standard-referenceerror"},{"text":"SyntaxError","id":"sec-native-error-types-used-in-this-standard-syntaxerror"},{"text":"TypeError","id":"sec-native-error-types-used-in-this-standard-typeerror"},{"text":"URIError","id":"sec-native-error-types-used-in-this-standard-urierror"},{"text":"NativeError ( message )","id":"sec-nativeerror"},{"text":"Properties of the","id":"sec-properties-of-the-nativeerror-constructors"},{"text":"NativeError.prototype","id":"sec-nativeerror.prototype"},{"text":"Properties of the","id":"sec-properties-of-the-nativeerror-prototype-objects"},{"text":"Properties of","id":"sec-properties-of-nativeerror-instances"},{"text":"Dates","id":"sec-numbers-and-dates"},{"text":"Objects","id":"sec-number-objects"},{"text":"The Number Constructor","id":"sec-number-constructor"},{"text":"Number ( [ value ] )","id":"sec-number-constructor-number-value"},{"text":"Properties of the Number Constructor","id":"sec-properties-of-the-number-constructor"},{"text":"Number.EPSILON","id":"sec-number.epsilon"},{"text":"Number.isFinite ( number )","id":"sec-number.isfinite"},{"text":"Number.isInteger ( number )","id":"sec-number.isinteger"},{"text":"Number.isNaN ( number )","id":"sec-number.isnan"},{"text":"Number.isSafeInteger ( number )","id":"sec-number.issafeinteger"},{"text":"Number.MAX_SAFE_INTEGER","id":"sec-number.max_safe_integer"},{"text":"Number.MAX_VALUE","id":"sec-number.max_value"},{"text":"Number.MIN_SAFE_INTEGER","id":"sec-number.min_safe_integer"},{"text":"Number.MIN_VALUE","id":"sec-number.min_value"},{"text":"Number.NaN","id":"sec-number.nan"},{"text":"Number.NEGATIVE_INFINITY","id":"sec-number.negative_infinity"},{"text":"Number.parseFloat ( string )","id":"sec-number.parsefloat"},{"text":"Number.parseInt ( string, radix )","id":"sec-number.parseint"},{"text":"Number.POSITIVE_INFINITY","id":"sec-number.positive_infinity"},{"text":"Number.prototype","id":"sec-number.prototype"},{"text":"Properties of the Number Prototype Object","id":"sec-properties-of-the-number-prototype-object"},{"text":"Number.prototype.constructor","id":"sec-number.prototype.constructor"},{"text":"Number.prototype.toExponential ( fractionDigits )","id":"sec-number.prototype.toexponential"},{"text":"Number.prototype.toFixed ( fractionDigits )","id":"sec-number.prototype.tofixed"},{"text":"Number.prototype.toLocaleString( [ reserved1 [ , reserved2 ] ])","id":"sec-number.prototype.tolocalestring"},{"text":"Number.prototype.toPrecision ( precision )","id":"sec-number.prototype.toprecision"},{"text":"Number.prototype.toString ( [ radix ] )","id":"sec-number.prototype.tostring"},{"text":"Number.prototype.valueOf ( )","id":"sec-number.prototype.valueof"},{"text":"Properties of Number Instances","id":"sec-properties-of-number-instances"},{"text":"Object","id":"sec-math-object"},{"text":"Value Properties of the Math Object","id":"sec-value-properties-of-the-math-object"},{"text":"Math.E","id":"sec-math.e"},{"text":"Math.LN10","id":"sec-math.ln10"},{"text":"Math.LN2","id":"sec-math.ln2"},{"text":"Math.LOG10E","id":"sec-math.log10e"},{"text":"Math.LOG2E","id":"sec-math.log2e"},{"text":"Math.PI","id":"sec-math.pi"},{"text":"Math.SQRT1_2","id":"sec-math.sqrt1_2"},{"text":"Math.SQRT2","id":"sec-math.sqrt2"},{"text":"Math [ @@toStringTag ]","id":"sec-math-@@tostringtag"},{"text":"Function Properties of the Math Object","id":"sec-function-properties-of-the-math-object"},{"text":"Math.abs ( x )","id":"sec-math.abs"},{"text":"Math.acos ( x )","id":"sec-math.acos"},{"text":"Math.acosh( x )","id":"sec-math.acosh"},{"text":"Math.asin ( x )","id":"sec-math.asin"},{"text":"Math.asinh( x )","id":"sec-math.asinh"},{"text":"Math.atan ( x )","id":"sec-math.atan"},{"text":"Math.atanh( x )","id":"sec-math.atanh"},{"text":"Math.atan2 ( y, x )","id":"sec-math.atan2"},{"text":"Math.cbrt ( x )","id":"sec-math.cbrt"},{"text":"Math.ceil ( x )","id":"sec-math.ceil"},{"text":"Math.clz32 ( x )","id":"sec-math.clz32"},{"text":"Math.cos ( x )","id":"sec-math.cos"},{"text":"Math.cosh ( x )","id":"sec-math.cosh"},{"text":"Math.exp ( x )","id":"sec-math.exp"},{"text":"Math.expm1 ( x )","id":"sec-math.expm1"},{"text":"Math.floor ( x )","id":"sec-math.floor"},{"text":"Math.fround ( x )","id":"sec-math.fround"},{"text":"Math.hypot ( value1 , value2 , …values )","id":"sec-math.hypot"},{"text":"Math.imul ( x, y )","id":"sec-math.imul"},{"text":"Math.log ( x )","id":"sec-math.log"},{"text":"Math.log1p ( x )","id":"sec-math.log1p"},{"text":"Math.log10 ( x )","id":"sec-math.log10"},{"text":"Math.log2 ( x )","id":"sec-math.log2"},{"text":"Math.max ( value1, value2  , …values  )","id":"sec-math.max"},{"text":"Math.min ( value1, value2  , …values  )","id":"sec-math.min"},{"text":"Math.pow ( x, y )","id":"sec-math.pow"},{"text":"Math.random ( )","id":"sec-math.random"},{"text":"Math.round ( x )","id":"sec-math.round"},{"text":"Math.sign(x)","id":"sec-math.sign"},{"text":"Math.sin ( x )","id":"sec-math.sin"},{"text":"Math.sinh( x )","id":"sec-math.sinh"},{"text":"Math.sqrt ( x )","id":"sec-math.sqrt"},{"text":"Math.tan ( x )","id":"sec-math.tan"},{"text":"Math.tanh ( x )","id":"sec-math.tanh"},{"text":"Math.trunc ( x )","id":"sec-math.trunc"},{"text":"Objects","id":"sec-date-objects"},{"text":"Overview of Date Objects and Definitions of Abstract Operations","id":"sec-overview-of-date-objects-and-definitions-of-abstract-operations"},{"text":"Time Values and Time Range","id":"sec-time-values-and-time-range"},{"text":"Day Number and Time within Day","id":"sec-day-number-and-time-within-day"},{"text":"Year Number","id":"sec-year-number"},{"text":"Month Number","id":"sec-month-number"},{"text":"Date Number","id":"sec-date-number"},{"text":"Day","id":"sec-week-day"},{"text":"Local Time Zone Adjustment","id":"sec-local-time-zone-adjustment"},{"text":"Daylight Saving Time Adjustment","id":"sec-daylight-saving-time-adjustment"},{"text":"LocalTime ( t )","id":"sec-localtime"},{"text":")","id":"sec-utc-t"},{"text":"Hours, Minutes, Second, and Milliseconds","id":"sec-hours-minutes-second-and-milliseconds"},{"text":"MakeTime (hour, min, sec, ms)","id":"sec-maketime"},{"text":"MakeDay (year, month, date)","id":"sec-makeday"},{"text":"MakeDate (day, time)","id":"sec-makedate"},{"text":"TimeClip (time)","id":"sec-timeclip"},{"text":"Date Time String Format","id":"sec-date-time-string-format"},{"text":"Extended years","id":"sec-extended-years"},{"text":"The Date Constructor","id":"sec-date-constructor"},{"text":"] ] ] ] )","id":"sec-date-year-month-date-hours-minutes-seconds-ms"},{"text":"( value )","id":"sec-date-value"},{"text":"Date ( )","id":"sec-date-constructor-date"},{"text":"Properties of the Date Constructor","id":"sec-properties-of-the-date-constructor"},{"text":"Date.now ( )","id":"sec-date.now"},{"text":"Date.parse ( string )","id":"sec-date.parse"},{"text":"Date.prototype","id":"sec-date.prototype"},{"text":"Date.UTC ( year, month [ , date [ , hours [ , minutes [ , seconds [ , ms ] ] ] ] ] )","id":"sec-date.utc"},{"text":"Properties of the Date Prototype Object","id":"sec-properties-of-the-date-prototype-object"},{"text":"Date.prototype.constructor","id":"sec-date.prototype.constructor"},{"text":"Date.prototype.getDate ( )","id":"sec-date.prototype.getdate"},{"text":"Date.prototype.getDay ( )","id":"sec-date.prototype.getday"},{"text":"Date.prototype.getFullYear ( )","id":"sec-date.prototype.getfullyear"},{"text":"Date.prototype.getHours ( )","id":"sec-date.prototype.gethours"},{"text":"Date.prototype.getMilliseconds ( )","id":"sec-date.prototype.getmilliseconds"},{"text":"Date.prototype.getMinutes ( )","id":"sec-date.prototype.getminutes"},{"text":"Date.prototype.getMonth ( )","id":"sec-date.prototype.getmonth"},{"text":"Date.prototype.getSeconds ( )","id":"sec-date.prototype.getseconds"},{"text":"Date.prototype.getTime ( )","id":"sec-date.prototype.gettime"},{"text":"Date.prototype.getTimezoneOffset ( )","id":"sec-date.prototype.gettimezoneoffset"},{"text":"Date.prototype.getUTCDate ( )","id":"sec-date.prototype.getutcdate"},{"text":"Date.prototype.getUTCDay ( )","id":"sec-date.prototype.getutcday"},{"text":"Date.prototype.getUTCFullYear ( )","id":"sec-date.prototype.getutcfullyear"},{"text":"Date.prototype.getUTCHours ( )","id":"sec-date.prototype.getutchours"},{"text":"Date.prototype.getUTCMilliseconds ( )","id":"sec-date.prototype.getutcmilliseconds"},{"text":"Date.prototype.getUTCMinutes ( )","id":"sec-date.prototype.getutcminutes"},{"text":"Date.prototype.getUTCMonth ( )","id":"sec-date.prototype.getutcmonth"},{"text":"Date.prototype.getUTCSeconds ( )","id":"sec-date.prototype.getutcseconds"},{"text":"Date.prototype.setDate ( date )","id":"sec-date.prototype.setdate"},{"text":"Date.prototype.setFullYear ( year [ , month [ , date ] ] )","id":"sec-date.prototype.setfullyear"},{"text":"Date.prototype.setHours ( hour [ , min [ , sec [ , ms ] ] ] )","id":"sec-date.prototype.sethours"},{"text":"Date.prototype.setMilliseconds ( ms )","id":"sec-date.prototype.setmilliseconds"},{"text":"Date.prototype.setMinutes ( min [ , sec [ , ms ] ] )","id":"sec-date.prototype.setminutes"},{"text":"Date.prototype.setMonth ( month [ , date ] )","id":"sec-date.prototype.setmonth"},{"text":"Date.prototype.setSeconds ( sec [ , ms ] )","id":"sec-date.prototype.setseconds"},{"text":"Date.prototype.setTime ( time )","id":"sec-date.prototype.settime"},{"text":"Date.prototype.setUTCDate ( date )","id":"sec-date.prototype.setutcdate"},{"text":"Date.prototype.setUTCFullYear ( year [ , month [ , date ] ] )","id":"sec-date.prototype.setutcfullyear"},{"text":")","id":"sec-date.prototype.setutchours"},{"text":"Date.prototype.setUTCMilliseconds ( ms )","id":"sec-date.prototype.setutcmilliseconds"},{"text":"Date.prototype.setUTCMinutes ( min [ , sec [, ms ] ] )","id":"sec-date.prototype.setutcminutes"},{"text":"Date.prototype.setUTCMonth ( month [ , date ] )","id":"sec-date.prototype.setutcmonth"},{"text":"Date.prototype.setUTCSeconds ( sec [ , ms ] )","id":"sec-date.prototype.setutcseconds"},{"text":"Date.prototype.toDateString ( )","id":"sec-date.prototype.todatestring"},{"text":"Date.prototype.toISOString ( )","id":"sec-date.prototype.toisostring"},{"text":"Date.prototype.toJSON ( key )","id":"sec-date.prototype.tojson"},{"text":")","id":"sec-date.prototype.tolocaledatestring"},{"text":"Date.prototype.toLocaleString ( [ reserved1 [ , reserved2 ] ] )","id":"sec-date.prototype.tolocalestring"},{"text":")","id":"sec-date.prototype.tolocaletimestring"},{"text":"Date.prototype.toString ( )","id":"sec-date.prototype.tostring"},{"text":"Runtime Semantics: ToDateString(tv)","id":"sec-todatestring"},{"text":"Date.prototype.toTimeString ( )","id":"sec-date.prototype.totimestring"},{"text":"Date.prototype.toUTCString ( )","id":"sec-date.prototype.toutcstring"},{"text":"Date.prototype.valueOf ( )","id":"sec-date.prototype.valueof"},{"text":"Date.prototype [ @@toPrimitive ] ( hint )","id":"sec-date.prototype-@@toprimitive"},{"text":"Properties of Date Instances","id":"sec-properties-of-date-instances"},{"text":"Processing","id":"sec-text-processing"},{"text":"Objects","id":"sec-string-objects"},{"text":"The String Constructor","id":"sec-string-constructor"},{"text":"String ( value )","id":"sec-string-constructor-string-value"},{"text":"Properties of the String Constructor","id":"sec-properties-of-the-string-constructor"},{"text":"String.fromCharCode ( ...codeUnits )","id":"sec-string.fromcharcode"},{"text":"String.fromCodePoint ( ...codePoints )","id":"sec-string.fromcodepoint"},{"text":"String.prototype","id":"sec-string.prototype"},{"text":"String.raw ( template , ...substitutions  )","id":"sec-string.raw"},{"text":"Properties of the String Prototype Object","id":"sec-properties-of-the-string-prototype-object"},{"text":"String.prototype.charAt ( pos )","id":"sec-string.prototype.charat"},{"text":"String.prototype.charCodeAt ( pos )","id":"sec-string.prototype.charcodeat"},{"text":"String.prototype.codePointAt ( pos )","id":"sec-string.prototype.codepointat"},{"text":"String.prototype.concat ( ...args )","id":"sec-string.prototype.concat"},{"text":"String.prototype.constructor","id":"sec-string.prototype.constructor"},{"text":"String.prototype.endsWith ( searchString [ , endPosition] )","id":"sec-string.prototype.endswith"},{"text":"String.prototype.includes ( searchString [ , position ] )","id":"sec-string.prototype.includes"},{"text":"String.prototype.indexOf ( searchString [ , position ] )","id":"sec-string.prototype.indexof"},{"text":"String.prototype.lastIndexOf ( searchString [ , position ] )","id":"sec-string.prototype.lastindexof"},{"text":")","id":"sec-string.prototype.localecompare"},{"text":"String.prototype.match ( regexp )","id":"sec-string.prototype.match"},{"text":"String.prototype.normalize ( [ form ] )","id":"sec-string.prototype.normalize"},{"text":"String.prototype.repeat ( count )","id":"sec-string.prototype.repeat"},{"text":"String.prototype.replace (searchValue, replaceValue )","id":"sec-string.prototype.replace"},{"text":"captures, replacement)","id":"sec-getsubstitution"},{"text":"String.prototype.search ( regexp )","id":"sec-string.prototype.search"},{"text":"String.prototype.slice ( start, end )","id":"sec-string.prototype.slice"},{"text":"String.prototype.split ( separator, limit )","id":"sec-string.prototype.split"},{"text":"Runtime Semantics: SplitMatch ( S, q, R )","id":"sec-splitmatch"},{"text":"String.prototype.startsWith ( searchString [, position ] )","id":"sec-string.prototype.startswith"},{"text":"String.prototype.substring ( start, end )","id":"sec-string.prototype.substring"},{"text":")","id":"sec-string.prototype.tolocalelowercase"},{"text":")","id":"sec-string.prototype.tolocaleuppercase"},{"text":"String.prototype.toLowerCase ( )","id":"sec-string.prototype.tolowercase"},{"text":"String.prototype.toString ( )","id":"sec-string.prototype.tostring"},{"text":"String.prototype.toUpperCase ( )","id":"sec-string.prototype.touppercase"},{"text":"String.prototype.trim ( )","id":"sec-string.prototype.trim"},{"text":"String.prototype.valueOf ( )","id":"sec-string.prototype.valueof"},{"text":"String.prototype [ @@iterator ]( )","id":"sec-string.prototype-@@iterator"},{"text":"Properties of String Instances","id":"sec-properties-of-string-instances"},{"text":"length","id":"sec-properties-of-string-instances-length"},{"text":"String Iterator Objects","id":"sec-string-iterator-objects"},{"text":"CreateStringIterator Abstract Operation","id":"sec-createstringiterator"},{"text":"The %StringIteratorPrototype% Object","id":"sec-%stringiteratorprototype%-object"},{"text":"%StringIteratorPrototype%.next ( )","id":"sec-%stringiteratorprototype%.next"},{"text":"%StringIteratorPrototype% [ @@toStringTag ]","id":"sec-%stringiteratorprototype%-@@tostringtag"},{"text":"Properties of String Iterator Instances","id":"sec-properties-of-string-iterator-instances"},{"text":"RegExp (Regular Expression) Objects","id":"sec-regexp-regular-expression-objects"},{"text":"Patterns","id":"sec-patterns"},{"text":"Static Semantics:  Early Errors","id":"sec-patterns-static-semantics-early-errors"},{"text":"Pattern Semantics","id":"sec-pattern-semantics"},{"text":"Notation","id":"sec-notation"},{"text":"Pattern","id":"sec-pattern"},{"text":"Disjunction","id":"sec-disjunction"},{"text":"Alternative","id":"sec-alternative"},{"text":"Term","id":"sec-term"},{"text":"Runtime Semantics: RepeatMatcher Abstract Operation","id":"sec-runtime-semantics-repeatmatcher-abstract-operation"},{"text":"Assertion","id":"sec-assertion"},{"text":"Runtime Semantics: IsWordChar Abstract Operation","id":"sec-runtime-semantics-iswordchar-abstract-operation"},{"text":"Quantifier","id":"sec-quantifier"},{"text":"Atom","id":"sec-atom"},{"text":"Runtime Semantics: CharacterSetMatcher Abstract Operation","id":"sec-runtime-semantics-charactersetmatcher-abstract-operation"},{"text":"Runtime Semantics: Canonicalize ( ch )","id":"sec-runtime-semantics-canonicalize-ch"},{"text":"AtomEscape","id":"sec-atomescape"},{"text":"CharacterEscape","id":"sec-characterescape"},{"text":"DecimalEscape","id":"sec-decimalescape"},{"text":"CharacterClassEscape","id":"sec-characterclassescape"},{"text":"CharacterClass","id":"sec-characterclass"},{"text":"ClassRanges","id":"sec-classranges"},{"text":"NonemptyClassRanges","id":"sec-nonemptyclassranges"},{"text":"Runtime Semantics: CharacterRange Abstract Operation","id":"sec-runtime-semantics-characterrange-abstract-operation"},{"text":"NonemptyClassRangesNoDash","id":"sec-nonemptyclassrangesnodash"},{"text":"ClassAtom","id":"sec-classatom"},{"text":"ClassAtomNoDash","id":"sec-classatomnodash"},{"text":"ClassEscape","id":"sec-classescape"},{"text":"The RegExp Constructor","id":"sec-regexp-constructor"},{"text":"RegExp ( pattern, flags )","id":"sec-regexp-pattern-flags"},{"text":"Abstract Operations for the RegExp Constructor","id":"sec-abstract-operations-for-the-regexp-constructor"},{"text":"Runtime Semantics: RegExpAlloc ( newTarget )","id":"sec-regexpalloc"},{"text":"Runtime Semantics: RegExpInitialize ( obj, pattern, flags )","id":"sec-regexpinitialize"},{"text":"Runtime Semantics: RegExpCreate ( P, F )","id":"sec-regexpcreate"},{"text":"Runtime Semantics: EscapeRegExpPattern ( P, F )","id":"sec-escaperegexppattern"},{"text":"Properties of the RegExp Constructor","id":"sec-properties-of-the-regexp-constructor"},{"text":"RegExp.prototype","id":"sec-regexp.prototype"},{"text":"get RegExp [ @@species ]","id":"sec-get-regexp-@@species"},{"text":"Properties of the RegExp Prototype Object","id":"sec-properties-of-the-regexp-prototype-object"},{"text":"RegExp.prototype.constructor","id":"sec-regexp.prototype.constructor"},{"text":"RegExp.prototype.exec ( string )","id":"sec-regexp.prototype.exec"},{"text":"Runtime Semantics: RegExpExec ( R, S )","id":"sec-regexpexec"},{"text":"Runtime Semantics: RegExpBuiltinExec ( R, S )","id":"sec-regexpbuiltinexec"},{"text":"AdvanceStringIndex ( S, index, unicode )","id":"sec-advancestringindex"},{"text":"get RegExp.prototype.flags","id":"sec-get-regexp.prototype.flags"},{"text":"get RegExp.prototype.global","id":"sec-get-regexp.prototype.global"},{"text":"get RegExp.prototype.ignoreCase","id":"sec-get-regexp.prototype.ignorecase"},{"text":"RegExp.prototype [ @@match ] ( string )","id":"sec-regexp.prototype-@@match"},{"text":"get RegExp.prototype.multiline","id":"sec-get-regexp.prototype.multiline"},{"text":"RegExp.prototype [ @@replace ] ( string, replaceValue )","id":"sec-regexp.prototype-@@replace"},{"text":"RegExp.prototype [ @@search ] ( string )","id":"sec-regexp.prototype-@@search"},{"text":"get RegExp.prototype.source","id":"sec-get-regexp.prototype.source"},{"text":"RegExp.prototype [ @@split ] ( string, limit )","id":"sec-regexp.prototype-@@split"},{"text":"get RegExp.prototype.sticky","id":"sec-get-regexp.prototype.sticky"},{"text":"RegExp.prototype.test( S )","id":"sec-regexp.prototype.test"},{"text":"RegExp.prototype.toString ( )","id":"sec-regexp.prototype.tostring"},{"text":"get RegExp.prototype.unicode","id":"sec-get-regexp.prototype.unicode"},{"text":"Properties of RegExp Instances","id":"sec-properties-of-regexp-instances"},{"text":"lastIndex","id":"sec-lastindex"},{"text":"Collections","id":"sec-indexed-collections"},{"text":"Objects","id":"sec-array-objects"},{"text":"The Array Constructor","id":"sec-array-constructor"},{"text":"Array ( )","id":"sec-array-constructor-array"},{"text":"(len)","id":"sec-array-len"},{"text":"Array (...items )","id":"sec-array-items"},{"text":"Properties of the Array Constructor","id":"sec-properties-of-the-array-constructor"},{"text":"Array.from ( items [ , mapfn [ , thisArg ] ] )","id":"sec-array.from"},{"text":"Array.isArray ( arg )","id":"sec-array.isarray"},{"text":"Array.of ( ...items )","id":"sec-array.of"},{"text":"Array.prototype","id":"sec-array.prototype"},{"text":"get Array [ @@species ]","id":"sec-get-array-@@species"},{"text":"Properties of the Array Prototype Object","id":"sec-properties-of-the-array-prototype-object"},{"text":"Array.prototype.concat ( ...arguments )","id":"sec-array.prototype.concat"},{"text":"Runtime Semantics: IsConcatSpreadable ( O )","id":"sec-isconcatspreadable"},{"text":"Array.prototype.constructor","id":"sec-array.prototype.constructor"},{"text":"Array.prototype.copyWithin (target, start [ , end ] )","id":"sec-array.prototype.copywithin"},{"text":"Array.prototype.entries ( )","id":"sec-array.prototype.entries"},{"text":"Array.prototype.every ( callbackfn [ , thisArg] )","id":"sec-array.prototype.every"},{"text":"Array.prototype.fill (value [ , start [ , end ] ] )","id":"sec-array.prototype.fill"},{"text":"Array.prototype.filter ( callbackfn [ , thisArg ] )","id":"sec-array.prototype.filter"},{"text":"Array.prototype.find ( predicate [ , thisArg ] )","id":"sec-array.prototype.find"},{"text":"Array.prototype.findIndex ( predicate [ , thisArg ] )","id":"sec-array.prototype.findindex"},{"text":"Array.prototype.forEach ( callbackfn [ , thisArg ] )","id":"sec-array.prototype.foreach"},{"text":"Array.prototype.indexOf ( searchElement [ , fromIndex ] )","id":"sec-array.prototype.indexof"},{"text":"Array.prototype.join (separator)","id":"sec-array.prototype.join"},{"text":"Array.prototype.keys ( )","id":"sec-array.prototype.keys"},{"text":"Array.prototype.lastIndexOf ( searchElement [ , fromIndex ] )","id":"sec-array.prototype.lastindexof"},{"text":"Array.prototype.map ( callbackfn [ , thisArg ] )","id":"sec-array.prototype.map"},{"text":"Array.prototype.pop ( )","id":"sec-array.prototype.pop"},{"text":"Array.prototype.push ( ...items )","id":"sec-array.prototype.push"},{"text":"Array.prototype.reduce ( callbackfn [ , initialValue ] )","id":"sec-array.prototype.reduce"},{"text":"Array.prototype.reduceRight ( callbackfn [ , initialValue ] )","id":"sec-array.prototype.reduceright"},{"text":"Array.prototype.reverse ( )","id":"sec-array.prototype.reverse"},{"text":"Array.prototype.shift ( )","id":"sec-array.prototype.shift"},{"text":"Array.prototype.slice (start, end)","id":"sec-array.prototype.slice"},{"text":"Array.prototype.some ( callbackfn [ , thisArg ] )","id":"sec-array.prototype.some"},{"text":"Array.prototype.sort (comparefn)","id":"sec-array.prototype.sort"},{"text":"Runtime Semantics: SortCompare( x, y )","id":"sec-sortcompare"},{"text":"Array.prototype.splice (start, deleteCount , ...items  )","id":"sec-array.prototype.splice"},{"text":")","id":"sec-array.prototype.tolocalestring"},{"text":"Array.prototype.toString ( )","id":"sec-array.prototype.tostring"},{"text":"Array.prototype.unshift ( ...items )","id":"sec-array.prototype.unshift"},{"text":"Array.prototype.values ( )","id":"sec-array.prototype.values"},{"text":"Array.prototype [ @@iterator ]  ( )","id":"sec-array.prototype-@@iterator"},{"text":"Array.prototype [ @@unscopables ]","id":"sec-array.prototype-@@unscopables"},{"text":"Properties of Array Instances","id":"sec-properties-of-array-instances"},{"text":"length","id":"sec-properties-of-array-instances-length"},{"text":"Array Iterator Objects","id":"sec-array-iterator-objects"},{"text":"CreateArrayIterator Abstract Operation","id":"sec-createarrayiterator"},{"text":"The %ArrayIteratorPrototype% Object","id":"sec-%arrayiteratorprototype%-object"},{"text":"%ArrayIteratorPrototype%.next( )","id":"sec-%arrayiteratorprototype%.next"},{"text":"%ArrayIteratorPrototype% [ @@toStringTag ]","id":"sec-%arrayiteratorprototype%-@@tostringtag"},{"text":"Properties of Array Iterator Instances","id":"sec-properties-of-array-iterator-instances"},{"text":"TypedArray Objects","id":"sec-typedarray-objects"},{"text":"The %TypedArray% Intrinsic Object","id":"sec-%typedarray%-intrinsic-object"},{"text":"%TypedArray% ( )","id":"sec-%typedarray%-intrinsic-object-%typedarray%"},{"text":"%TypedArray% ( length )","id":"sec-%typedarray%-length"},{"text":"Runtime Semantics: AllocateTypedArray (newTarget, length )","id":"sec-allocatetypedarray"},{"text":"%TypedArray% ( typedArray )","id":"sec-%typedarray%-typedarray"},{"text":"%TypedArray% ( object )","id":"sec-%typedarray%-object"},{"text":"%TypedArray% ( buffer [ , byteOffset [ , length ] ] )","id":"sec-%typedarray%-buffer-byteoffset-length"},{"text":"Properties of the %TypedArray% Intrinsic Object","id":"sec-properties-of-the-%typedarray%-intrinsic-object"},{"text":"%TypedArray%.from ( source [ , mapfn [ , thisArg ] ] )","id":"sec-%typedarray%.from"},{"text":"thisArg )","id":"sec-typedarrayfrom"},{"text":"%TypedArray%.of ( ...items )","id":"sec-%typedarray%.of"},{"text":"%TypedArray%.prototype","id":"sec-%typedarray%.prototype"},{"text":"get %TypedArray% [ @@species ]","id":"sec-get-%typedarray%-@@species"},{"text":"Properties of the %TypedArrayPrototype% Object","id":"sec-properties-of-the-%typedarrayprototype%-object"},{"text":"get  %TypedArray%.prototype.buffer","id":"sec-get-%typedarray%.prototype.buffer"},{"text":"get  %TypedArray%.prototype.byteLength","id":"sec-get-%typedarray%.prototype.bytelength"},{"text":"get  %TypedArray%.prototype.byteOffset","id":"sec-get-%typedarray%.prototype.byteoffset"},{"text":"%TypedArray%.prototype.constructor","id":"sec-%typedarray%.prototype.constructor"},{"text":"%TypedArray%.prototype.copyWithin (target, start [, end ] )","id":"sec-%typedarray%.prototype.copywithin"},{"text":"Runtime Semantics:  ValidateTypedArray ( O )","id":"sec-validatetypedarray"},{"text":"%TypedArray%.prototype.entries ( )","id":"sec-%typedarray%.prototype.entries"},{"text":"%TypedArray%.prototype.every ( callbackfn [ , thisArg ] )","id":"sec-%typedarray%.prototype.every"},{"text":"%TypedArray%.prototype.fill (value [ , start [ , end ] ] )","id":"sec-%typedarray%.prototype.fill"},{"text":"%TypedArray%.prototype.filter ( callbackfn [ , thisArg ] )","id":"sec-%typedarray%.prototype.filter"},{"text":"%TypedArray%.prototype.find (predicate [ , thisArg ] )","id":"sec-%typedarray%.prototype.find"},{"text":"%TypedArray%.prototype.findIndex ( predicate [ , thisArg ] )","id":"sec-%typedarray%.prototype.findindex"},{"text":"%TypedArray%.prototype.forEach ( callbackfn [ , thisArg ] )","id":"sec-%typedarray%.prototype.foreach"},{"text":"%TypedArray%.prototype.indexOf (searchElement [ , fromIndex ] )","id":"sec-%typedarray%.prototype.indexof"},{"text":"%TypedArray%.prototype.join ( separator )","id":"sec-%typedarray%.prototype.join"},{"text":"%TypedArray%.prototype.keys ( )","id":"sec-%typedarray%.prototype.keys"},{"text":")","id":"sec-%typedarray%.prototype.lastindexof"},{"text":"get  %TypedArray%.prototype.length","id":"sec-get-%typedarray%.prototype.length"},{"text":"%TypedArray%.prototype.map ( callbackfn [ , thisArg ] )","id":"sec-%typedarray%.prototype.map"},{"text":"%TypedArray%.prototype.reduce ( callbackfn [ , initialValue ] )","id":"sec-%typedarray%.prototype.reduce"},{"text":")","id":"sec-%typedarray%.prototype.reduceright"},{"text":"%TypedArray%.prototype.reverse ( )","id":"sec-%typedarray%.prototype.reverse"},{"text":"%TypedArray%.prototype.set ( overloaded [ , offset ])","id":"sec-%typedarray%.prototype.set-overloaded-offset"},{"text":"%TypedArray%.prototype.set (array [ , offset ] )","id":"sec-%typedarray%.prototype.set-array-offset"},{"text":"%TypedArray%.prototype.set(typedArray [, offset ] )","id":"sec-%typedarray%.prototype.set-typedarray-offset"},{"text":"%TypedArray%.prototype.slice ( start, end )","id":"sec-%typedarray%.prototype.slice"},{"text":"%TypedArray%.prototype.some ( callbackfn [ , thisArg ] )","id":"sec-%typedarray%.prototype.some"},{"text":"%TypedArray%.prototype.sort ( comparefn )","id":"sec-%typedarray%.prototype.sort"},{"text":"%TypedArray%.prototype.subarray( [ begin [ , end ] ] )","id":"sec-%typedarray%.prototype.subarray"},{"text":"])","id":"sec-%typedarray%.prototype.tolocalestring"},{"text":"%TypedArray%.prototype.toString ( )","id":"sec-%typedarray%.prototype.tostring"},{"text":"%TypedArray%.prototype.values ( )","id":"sec-%typedarray%.prototype.values"},{"text":"%TypedArray%.prototype [ @@iterator ]  ( )","id":"sec-%typedarray%.prototype-@@iterator"},{"text":"get %TypedArray%.prototype [ @@toStringTag ]","id":"sec-get-%typedarray%.prototype-@@tostringtag"},{"text":"The","id":"sec-typedarray-constructors"},{"text":"Properties of the","id":"sec-properties-of-the-typedarray-constructors"},{"text":"Properties of","id":"sec-properties-of-typedarray-prototype-objects"},{"text":"Properties of","id":"sec-properties-of-typedarray-instances"},{"text":"Collection","id":"sec-keyed-collection"},{"text":"Objects","id":"sec-map-objects"},{"text":"Map Constructor","id":"sec-map-constructor"},{"text":"Map ( [ iterable ] )","id":"sec-map-iterable"},{"text":"Properties of the Map Constructor","id":"sec-properties-of-the-map-constructor"},{"text":"Map.prototype","id":"sec-map.prototype"},{"text":"get Map [ @@species ]","id":"sec-get-map-@@species"},{"text":"Properties of the Map Prototype Object","id":"sec-properties-of-the-map-prototype-object"},{"text":"Map.prototype.clear ( )","id":"sec-map.prototype.clear"},{"text":"Map.prototype.constructor","id":"sec-map.prototype.constructor"},{"text":"Map.prototype.delete ( key )","id":"sec-map.prototype.delete"},{"text":"Map.prototype.entries ( )","id":"sec-map.prototype.entries"},{"text":"Map.prototype.forEach ( callbackfn [ , thisArg ] )","id":"sec-map.prototype.foreach"},{"text":"Map.prototype.get ( key )","id":"sec-map.prototype.get"},{"text":"Map.prototype.has ( key )","id":"sec-map.prototype.has"},{"text":"Map.prototype.keys ( )","id":"sec-map.prototype.keys"},{"text":"Map.prototype.set ( key , value )","id":"sec-map.prototype.set"},{"text":"get Map.prototype.size","id":"sec-get-map.prototype.size"},{"text":"Map.prototype.values ( )","id":"sec-map.prototype.values"},{"text":"Map.prototype [ @@iterator ]( )","id":"sec-map.prototype-@@iterator"},{"text":"Map.prototype [ @@toStringTag ]","id":"sec-map.prototype-@@tostringtag"},{"text":"Properties of Map Instances","id":"sec-properties-of-map-instances"},{"text":"Map Iterator Objects","id":"sec-map-iterator-objects"},{"text":"CreateMapIterator Abstract Operation","id":"sec-createmapiterator"},{"text":"The %MapIteratorPrototype% Object","id":"sec-%mapiteratorprototype%-object"},{"text":"%MapIteratorPrototype%.next ( )","id":"sec-%mapiteratorprototype%.next"},{"text":"%MapIteratorPrototype% [ @@toStringTag ]","id":"sec-%mapiteratorprototype%-@@tostringtag"},{"text":"Properties of Map Iterator Instances","id":"sec-properties-of-map-iterator-instances"},{"text":"Objects","id":"sec-set-objects"},{"text":"Set Constructor","id":"sec-set-constructor"},{"text":"Set ( [ iterable ] )","id":"sec-set-iterable"},{"text":"Properties of the Set Constructor","id":"sec-properties-of-the-set-constructor"},{"text":"Set.prototype","id":"sec-set.prototype"},{"text":"get Set [ @@species ]","id":"sec-get-set-@@species"},{"text":"Properties of the Set Prototype Object","id":"sec-properties-of-the-set-prototype-object"},{"text":"Set.prototype.add ( value )","id":"sec-set.prototype.add"},{"text":"Set.prototype.clear ( )","id":"sec-set.prototype.clear"},{"text":"Set.prototype.constructor","id":"sec-set.prototype.constructor"},{"text":"Set.prototype.delete ( value )","id":"sec-set.prototype.delete"},{"text":"Set.prototype.entries ( )","id":"sec-set.prototype.entries"},{"text":"Set.prototype.forEach ( callbackfn [ , thisArg ] )","id":"sec-set.prototype.foreach"},{"text":"Set.prototype.has ( value )","id":"sec-set.prototype.has"},{"text":"Set.prototype.keys ( )","id":"sec-set.prototype.keys"},{"text":"get Set.prototype.size","id":"sec-get-set.prototype.size"},{"text":"Set.prototype.values ( )","id":"sec-set.prototype.values"},{"text":"Set.prototype [ @@iterator ] ( )","id":"sec-set.prototype-@@iterator"},{"text":"Set.prototype [ @@toStringTag ]","id":"sec-set.prototype-@@tostringtag"},{"text":"Properties of Set Instances","id":"sec-properties-of-set-instances"},{"text":"Set Iterator Objects","id":"sec-set-iterator-objects"},{"text":"CreateSetIterator Abstract Operation","id":"sec-createsetiterator"},{"text":"The %SetIteratorPrototype% Object","id":"sec-%setiteratorprototype%-object"},{"text":"%SetIteratorPrototype%.next ( )","id":"sec-%setiteratorprototype%.next"},{"text":"%SetIteratorPrototype% [ @@toStringTag ]","id":"sec-%setiteratorprototype%-@@tostringtag"},{"text":"Properties of Set Iterator Instances","id":"sec-properties-of-set-iterator-instances"},{"text":"Objects","id":"sec-weakmap-objects"},{"text":"The WeakMap Constructor","id":"sec-weakmap-constructor"},{"text":"WeakMap ( [ iterable ] )","id":"sec-weakmap-iterable"},{"text":"Properties of the WeakMap Constructor","id":"sec-properties-of-the-weakmap-constructor"},{"text":"WeakMap.prototype","id":"sec-weakmap.prototype"},{"text":"Properties of the WeakMap Prototype Object","id":"sec-properties-of-the-weakmap-prototype-object"},{"text":"WeakMap.prototype.constructor","id":"sec-weakmap.prototype.constructor"},{"text":"WeakMap.prototype.delete ( key )","id":"sec-weakmap.prototype.delete"},{"text":"WeakMap.prototype.get ( key )","id":"sec-weakmap.prototype.get"},{"text":"WeakMap.prototype.has ( key )","id":"sec-weakmap.prototype.has"},{"text":"WeakMap.prototype.set ( key , value )","id":"sec-weakmap.prototype.set"},{"text":"WeakMap.prototype [ @@toStringTag ]","id":"sec-weakmap.prototype-@@tostringtag"},{"text":"Properties of WeakMap Instances","id":"sec-properties-of-weakmap-instances"},{"text":"Objects","id":"sec-weakset-objects"},{"text":"The WeakSet Constructor","id":"sec-weakset-constructor"},{"text":"WeakSet ( [ iterable ] )","id":"sec-weakset-iterable"},{"text":"Properties of the WeakSet Constructor","id":"sec-properties-of-the-weakset-constructor"},{"text":"WeakSet.prototype","id":"sec-weakset.prototype"},{"text":"Properties of the WeakSet Prototype Object","id":"sec-properties-of-the-weakset-prototype-object"},{"text":"WeakSet.prototype.add ( value )","id":"sec-weakset.prototype.add"},{"text":"WeakSet.prototype.constructor","id":"sec-weakset.prototype.constructor"},{"text":"WeakSet.prototype.delete ( value )","id":"sec-weakset.prototype.delete"},{"text":"WeakSet.prototype.has ( value )","id":"sec-weakset.prototype.has"},{"text":"WeakSet.prototype [ @@toStringTag ]","id":"sec-weakset.prototype-@@tostringtag"},{"text":"Properties of WeakSet Instances","id":"sec-properties-of-weakset-instances"},{"text":"Data","id":"sec-structured-data"},{"text":"ArrayBuffer Objects","id":"sec-arraybuffer-objects"},{"text":"Abstract Operations For ArrayBuffer Objects","id":"sec-abstract-operations-for-arraybuffer-objects"},{"text":"AllocateArrayBuffer( constructor, byteLength )","id":"sec-allocatearraybuffer"},{"text":"IsDetachedBuffer( arrayBuffer )","id":"sec-isdetachedbuffer"},{"text":"DetachArrayBuffer( arrayBuffer )","id":"sec-detacharraybuffer"},{"text":")","id":"sec-clonearraybuffer"},{"text":")","id":"sec-getvaluefrombuffer"},{"text":"isLittleEndian )","id":"sec-setvalueinbuffer"},{"text":"The ArrayBuffer Constructor","id":"sec-arraybuffer-constructor"},{"text":"ArrayBuffer( length )","id":"sec-arraybuffer-length"},{"text":"Properties of the ArrayBuffer Constructor","id":"sec-properties-of-the-arraybuffer-constructor"},{"text":"ArrayBuffer.isView ( arg )","id":"sec-arraybuffer.isview"},{"text":"ArrayBuffer.prototype","id":"sec-arraybuffer.prototype"},{"text":"get ArrayBuffer [ @@species ]","id":"sec-get-arraybuffer-@@species"},{"text":"Properties of the ArrayBuffer Prototype Object","id":"sec-properties-of-the-arraybuffer-prototype-object"},{"text":"get ArrayBuffer.prototype.byteLength","id":"sec-get-arraybuffer.prototype.bytelength"},{"text":"ArrayBuffer.prototype.constructor","id":"sec-arraybuffer.prototype.constructor"},{"text":"ArrayBuffer.prototype.slice ( start, end )","id":"sec-arraybuffer.prototype.slice"},{"text":"ArrayBuffer.prototype [ @@toStringTag ]","id":"sec-arraybuffer.prototype-@@tostringtag"},{"text":"Properties of the ArrayBuffer Instances","id":"sec-properties-of-the-arraybuffer-instances"},{"text":"Objects","id":"sec-dataview-objects"},{"text":"Abstract Operations For DataView Objects","id":"sec-abstract-operations-for-dataview-objects"},{"text":"GetViewValue ( view, requestIndex, isLittleEndian, type )","id":"sec-getviewvalue"},{"text":"SetViewValue ( view, requestIndex, isLittleEndian, type, value )","id":"sec-setviewvalue"},{"text":"The DataView Constructor","id":"sec-dataview-constructor"},{"text":"DataView (buffer [ , byteOffset [ , byteLength ] ] )","id":"sec-dataview-buffer-byteoffset-bytelength"},{"text":"Properties of the DataView Constructor","id":"sec-properties-of-the-dataview-constructor"},{"text":"DataView.prototype","id":"sec-dataview.prototype"},{"text":"Properties of the DataView Prototype Object","id":"sec-properties-of-the-dataview-prototype-object"},{"text":"get DataView.prototype.buffer","id":"sec-get-dataview.prototype.buffer"},{"text":"get DataView.prototype.byteLength","id":"sec-get-dataview.prototype.bytelength"},{"text":"get DataView.prototype.byteOffset","id":"sec-get-dataview.prototype.byteoffset"},{"text":"DataView.prototype.constructor","id":"sec-dataview.prototype.constructor"},{"text":"DataView.prototype.getFloat32 ( byteOffset [ , littleEndian ] )","id":"sec-dataview.prototype.getfloat32"},{"text":"DataView.prototype.getFloat64 ( byteOffset [ , littleEndian ] )","id":"sec-dataview.prototype.getfloat64"},{"text":"DataView.prototype.getInt8 ( byteOffset )","id":"sec-dataview.prototype.getint8"},{"text":"DataView.prototype.getInt16 ( byteOffset [ , littleEndian ] )","id":"sec-dataview.prototype.getint16"},{"text":"DataView.prototype.getInt32 ( byteOffset [ , littleEndian ] )","id":"sec-dataview.prototype.getint32"},{"text":"DataView.prototype.getUint8 ( byteOffset )","id":"sec-dataview.prototype.getuint8"},{"text":"DataView.prototype.getUint16 ( byteOffset [ , littleEndian ] )","id":"sec-dataview.prototype.getuint16"},{"text":"DataView.prototype.getUint32 ( byteOffset [ , littleEndian ] )","id":"sec-dataview.prototype.getuint32"},{"text":")","id":"sec-dataview.prototype.setfloat32"},{"text":")","id":"sec-dataview.prototype.setfloat64"},{"text":"DataView.prototype.setInt8 ( byteOffset, value )","id":"sec-dataview.prototype.setint8"},{"text":")","id":"sec-dataview.prototype.setint16"},{"text":")","id":"sec-dataview.prototype.setint32"},{"text":"DataView.prototype.setUint8 ( byteOffset, value )","id":"sec-dataview.prototype.setuint8"},{"text":")","id":"sec-dataview.prototype.setuint16"},{"text":")","id":"sec-dataview.prototype.setuint32"},{"text":"DataView.prototype[ @@toStringTag ]","id":"sec-dataview.prototype-@@tostringtag"},{"text":"Properties of DataView Instances","id":"sec-properties-of-dataview-instances"},{"text":"Object","id":"sec-json-object"},{"text":"JSON.parse ( text [ , reviver ] )","id":"sec-json.parse"},{"text":"Runtime Semantics: InternalizeJSONProperty( holder, name)","id":"sec-internalizejsonproperty"},{"text":"JSON.stringify ( value [ , replacer [ , space ] ] )","id":"sec-json.stringify"},{"text":"Runtime Semantics: SerializeJSONProperty ( key, holder )","id":"sec-serializejsonproperty"},{"text":"Runtime Semantics: QuoteJSONString ( value )","id":"sec-quotejsonstring"},{"text":"Runtime Semantics: SerializeJSONObject ( value )","id":"sec-serializejsonobject"},{"text":"Runtime Semantics: SerializeJSONArray ( value )","id":"sec-serializejsonarray"},{"text":"JSON [ @@toStringTag ]","id":"sec-json-@@tostringtag"},{"text":"Control Abstraction Objects","id":"sec-control-abstraction-objects"},{"text":"Iteration","id":"sec-iteration"},{"text":"Common Iteration Interfaces","id":"sec-common-iteration-interfaces"},{"text":"The","id":"sec-iterable-interface"},{"text":"The","id":"sec-iterator-interface"},{"text":"The IteratorResult  Interface","id":"sec-iteratorresult-interface"},{"text":"The %IteratorPrototype% Object","id":"sec-%iteratorprototype%-object"},{"text":"%IteratorPrototype% [ @@iterator ] (   )","id":"sec-%iteratorprototype%-@@iterator"},{"text":"GeneratorFunction Objects","id":"sec-generatorfunction-objects"},{"text":"The GeneratorFunction Constructor","id":"sec-generatorfunction-constructor"},{"text":"GeneratorFunction (p1, p2, … , pn, body)","id":"sec-generatorfunction"},{"text":"Properties of the GeneratorFunction Constructor","id":"sec-properties-of-the-generatorfunction-constructor"},{"text":"GeneratorFunction.length","id":"sec-generatorfunction.length"},{"text":"GeneratorFunction.prototype","id":"sec-generatorfunction.prototype"},{"text":"Properties of the GeneratorFunction Prototype Object","id":"sec-properties-of-the-generatorfunction-prototype-object"},{"text":"GeneratorFunction.prototype.constructor","id":"sec-generatorfunction.prototype.constructor"},{"text":"GeneratorFunction.prototype.prototype","id":"sec-generatorfunction.prototype.prototype"},{"text":"GeneratorFunction.prototype [ @@toStringTag ]","id":"sec-generatorfunction.prototype-@@tostringtag"},{"text":"GeneratorFunction Instances","id":"sec-generatorfunction-instances"},{"text":"length","id":"sec-generatorfunction-instances-length"},{"text":"name","id":"sec-generatorfunction-instances-name"},{"text":"prototype","id":"sec-generatorfunction-instances-prototype"},{"text":"Generator Objects","id":"sec-generator-objects"},{"text":"Properties of Generator Prototype","id":"sec-properties-of-generator-prototype"},{"text":"Generator.prototype.constructor","id":"sec-generator.prototype.constructor"},{"text":"Generator.prototype.next ( value )","id":"sec-generator.prototype.next"},{"text":"Generator.prototype.return ( value )","id":"sec-generator.prototype.return"},{"text":"Generator.prototype.throw ( exception )","id":"sec-generator.prototype.throw"},{"text":"Generator.prototype [ @@toStringTag ]","id":"sec-generator.prototype-@@tostringtag"},{"text":"Properties of Generator Instances","id":"sec-properties-of-generator-instances"},{"text":"Generator Abstract Operations","id":"sec-generator-abstract-operations"},{"text":"GeneratorStart (generator, generatorBody)","id":"sec-generatorstart"},{"text":"GeneratorValidate ( generator )","id":"sec-generatorvalidate"},{"text":"GeneratorResume ( generator, value )","id":"sec-generatorresume"},{"text":"GeneratorResumeAbrupt(generator, abruptCompletion)","id":"sec-generatorresumeabrupt"},{"text":"GeneratorYield ( iterNextObj )","id":"sec-generatoryield"},{"text":"Objects","id":"sec-promise-objects"},{"text":"Promise Abstract Operations","id":"sec-promise-abstract-operations"},{"text":"PromiseCapability Records","id":"sec-promisecapability-records"},{"text":"IfAbruptRejectPromise ( value, capability )","id":"sec-ifabruptrejectpromise"},{"text":"PromiseReaction Records","id":"sec-promisereaction-records"},{"text":"CreateResolvingFunctions ( promise )","id":"sec-createresolvingfunctions"},{"text":"Promise Reject Functions","id":"sec-promise-reject-functions"},{"text":"Promise Resolve Functions","id":"sec-promise-resolve-functions"},{"text":"FulfillPromise ( promise, value)","id":"sec-fulfillpromise"},{"text":"NewPromiseCapability ( C )","id":"sec-newpromisecapability"},{"text":"GetCapabilitiesExecutor Functions","id":"sec-getcapabilitiesexecutor-functions"},{"text":"IsPromise ( x )","id":"sec-ispromise"},{"text":"RejectPromise ( promise, reason)","id":"sec-rejectpromise"},{"text":"TriggerPromiseReactions ( reactions, argument )","id":"sec-triggerpromisereactions"},{"text":"Promise Jobs","id":"sec-promise-jobs"},{"text":"PromiseReactionJob ( reaction, argument )","id":"sec-promisereactionjob"},{"text":"PromiseResolveThenableJob ( promiseToResolve, thenable, then)","id":"sec-promiseresolvethenablejob"},{"text":"The Promise Constructor","id":"sec-promise-constructor"},{"text":"Promise ( executor )","id":"sec-promise-executor"},{"text":"Properties of the Promise Constructor","id":"sec-properties-of-the-promise-constructor"},{"text":"Promise.all ( iterable )","id":"sec-promise.all"},{"text":"constructor, resultCapability)","id":"sec-performpromiseall"},{"text":"Promise.all Resolve Element Functions","id":"sec-promise.all-resolve-element-functions"},{"text":"Promise.prototype","id":"sec-promise.prototype"},{"text":"Promise.race ( iterable )","id":"sec-promise.race"},{"text":"promiseCapability, C )","id":"sec-performpromiserace"},{"text":"Promise.reject ( r )","id":"sec-promise.reject"},{"text":"Promise.resolve ( x )","id":"sec-promise.resolve"},{"text":"get Promise [ @@species ]","id":"sec-get-promise-@@species"},{"text":"Properties of the Promise Prototype Object","id":"sec-properties-of-the-promise-prototype-object"},{"text":"Promise.prototype.catch ( onRejected )","id":"sec-promise.prototype.catch"},{"text":"Promise.prototype.constructor","id":"sec-promise.prototype.constructor"},{"text":"Promise.prototype.then ( onFulfilled , onRejected )","id":"sec-promise.prototype.then"},{"text":"resultCapability )","id":"sec-performpromisethen"},{"text":"Promise.prototype [ @@toStringTag ]","id":"sec-promise.prototype-@@tostringtag"},{"text":"Properties of Promise Instances","id":"sec-properties-of-promise-instances"},{"text":"Reflection","id":"sec-reflection"},{"text":"Reflect Object","id":"sec-reflect-object"},{"text":"Reflect.apply ( target, thisArgument, argumentsList )","id":"sec-reflect.apply"},{"text":"Reflect.construct ( target, argumentsList [, newTarget] )","id":"sec-reflect.construct"},{"text":"Reflect.defineProperty ( target, propertyKey, attributes )","id":"sec-reflect.defineproperty"},{"text":"Reflect.deleteProperty ( target, propertyKey )","id":"sec-reflect.deleteproperty"},{"text":"Reflect.enumerate ( target )","id":"sec-reflect.enumerate"},{"text":"Reflect.get ( target, propertyKey [ , receiver ])","id":"sec-reflect.get"},{"text":"Reflect.getOwnPropertyDescriptor ( target, propertyKey )","id":"sec-reflect.getownpropertydescriptor"},{"text":"Reflect.getPrototypeOf ( target )","id":"sec-reflect.getprototypeof"},{"text":"Reflect.has ( target, propertyKey )","id":"sec-reflect.has"},{"text":"Reflect.isExtensible (target)","id":"sec-reflect.isextensible"},{"text":"Reflect.ownKeys ( target )","id":"sec-reflect.ownkeys"},{"text":"Reflect.preventExtensions ( target )","id":"sec-reflect.preventextensions"},{"text":"Reflect.set ( target, propertyKey, V [ , receiver ] )","id":"sec-reflect.set"},{"text":"Reflect.setPrototypeOf ( target, proto )","id":"sec-reflect.setprototypeof"},{"text":"Objects","id":"sec-proxy-objects"},{"text":"The Proxy Constructor","id":"sec-proxy-constructor"},{"text":"Proxy ( target, handler )","id":"sec-proxy-target-handler"},{"text":"Properties of the Proxy Constructor","id":"sec-properties-of-the-proxy-constructor"},{"text":"Proxy.revocable ( target, handler )","id":"sec-proxy.revocable"},{"text":"Proxy Revocation Functions","id":"sec-proxy-revocation-functions"},{"text":"Module Namespace Objects","id":"sec-module-namespace-objects"},{"text":"@@toStringTag","id":"sec-@@tostringtag"},{"text":"@@iterator ] (   )","id":"sec-@@iterator"},{"text":"Grammar","id":"sec-lexical-grammar"},{"text":"Expressions","id":"sec-expressions"},{"text":"Statements","id":"sec-statements"},{"text":"Functions and Classes","id":"sec-functions-and-classes"},{"text":"and Modules","id":"sec-scripts-and-modules"},{"text":"Conversions","id":"sec-number-conversions"},{"text":"Universal Resource Identifier Character Classes","id":"sec-universal-resource-identifier-character-classes"},{"text":"Expressions","id":"sec-regular-expressions"},{"text":"Additional Syntax","id":"sec-additional-syntax"},{"text":"Numeric Literals","id":"sec-additional-syntax-numeric-literals"},{"text":"String Literals","id":"sec-additional-syntax-string-literals"},{"text":"HTML-like Comments","id":"sec-html-like-comments"},{"text":"Regular Expressions Patterns","id":"sec-regular-expressions-patterns"},{"text":"Additional Built-in Properties","id":"sec-additional-built-in-properties"},{"text":"Additional Properties of the Global Object","id":"sec-additional-properties-of-the-global-object"},{"text":"escape (string)","id":"sec-escape-string"},{"text":"unescape (string)","id":"sec-unescape-string"},{"text":"Additional Properties of the Object.prototype Object","id":"sec-additional-properties-of-the-object.prototype-object"},{"text":"Object.prototype.__proto__","id":"sec-object.prototype.__proto__"},{"text":"get Object.prototype.__proto__","id":"sec-get-object.prototype.__proto__"},{"text":"set Object.prototype.__proto__","id":"sec-set-object.prototype.__proto__"},{"text":"Additional Properties of the String.prototype Object","id":"sec-additional-properties-of-the-string.prototype-object"},{"text":"String.prototype.substr (start, length)","id":"sec-string.prototype.substr"},{"text":"String.prototype.anchor ( name )","id":"sec-string.prototype.anchor"},{"text":"Runtime Semantics: CreateHTML ( string, tag, attribute, value )","id":"sec-createhtml"},{"text":"String.prototype.big ()","id":"sec-string.prototype.big"},{"text":"String.prototype.blink ()","id":"sec-string.prototype.blink"},{"text":"String.prototype.bold ()","id":"sec-string.prototype.bold"},{"text":"String.prototype.fixed ()","id":"sec-string.prototype.fixed"},{"text":"String.prototype.fontcolor ( color )","id":"sec-string.prototype.fontcolor"},{"text":"String.prototype.fontsize ( size )","id":"sec-string.prototype.fontsize"},{"text":"String.prototype.italics ()","id":"sec-string.prototype.italics"},{"text":"String.prototype.link ( url )","id":"sec-string.prototype.link"},{"text":"String.prototype.small ()","id":"sec-string.prototype.small"},{"text":"String.prototype.strike ()","id":"sec-string.prototype.strike"},{"text":"String.prototype.sub ()","id":"sec-string.prototype.sub"},{"text":"String.prototype.sup ()","id":"sec-string.prototype.sup"},{"text":"Additional Properties of the Date.prototype Object","id":"sec-additional-properties-of-the-date.prototype-object"},{"text":"Date.prototype.getYear ( )","id":"sec-date.prototype.getyear"},{"text":"Date.prototype.setYear (year)","id":"sec-date.prototype.setyear"},{"text":"Date.prototype.toGMTString ( )","id":"sec-date.prototype.togmtstring"},{"text":"Additional Properties of the RegExp.prototype Object","id":"sec-additional-properties-of-the-regexp.prototype-object"},{"text":"RegExp.prototype.compile (pattern, flags )","id":"sec-regexp.prototype.compile"},{"text":"Other Additional Features","id":"sec-other-additional-features"},{"text":"__proto__ Property Names in Object Initializers","id":"sec-__proto__-property-names-in-object-initializers"},{"text":"Labelled Function Declarations","id":"sec-labelled-function-declarations"},{"text":"Block-Level Function Declarations Web Legacy Compatibility Semantics","id":"sec-block-level-function-declarations-web-legacy-compatibility-semantics"},{"text":"FunctionDeclarations in IfStatement Statement Clauses","id":"sec-functiondeclarations-in-ifstatement-statement-clauses"},{"text":"VariableStatements in Catch blocks","id":"sec-variablestatements-in-catch-blocks"}]
},{}],2:[function(require,module,exports){
/*
 * Fuzzy
 * https://github.com/myork/fuzzy
 *
 * Copyright (c) 2012 Matt York
 * Licensed under the MIT license.
 */

(function() {

var root = this;

var fuzzy = {};

// Use in node or in browser
if (typeof exports !== 'undefined') {
  module.exports = fuzzy;
} else {
  root.fuzzy = fuzzy;
}

// Return all elements of `array` that have a fuzzy
// match against `pattern`.
fuzzy.simpleFilter = function(pattern, array) {
  return array.filter(function(string) {
    return fuzzy.test(pattern, string);
  });
};

// Does `pattern` fuzzy match `string`?
fuzzy.test = function(pattern, string) {
  return fuzzy.match(pattern, string) !== null;
};

// If `pattern` matches `string`, wrap each matching character
// in `opts.pre` and `opts.post`. If no match, return null
fuzzy.match = function(pattern, string, opts) {
  opts = opts || {};
  var patternIdx = 0
    , result = []
    , len = string.length
    , totalScore = 0
    , currScore = 0
    // prefix
    , pre = opts.pre || ''
    // suffix
    , post = opts.post || ''
    // String to compare against. This might be a lowercase version of the
    // raw string
    , compareString =  opts.caseSensitive && string || string.toLowerCase()
    , ch, compareChar;

  pattern = opts.caseSensitive && pattern || pattern.toLowerCase();

  // For each character in the string, either add it to the result
  // or wrap in template if it's the next string in the pattern
  for(var idx = 0; idx < len; idx++) {
    ch = string[idx];
    if(compareString[idx] === pattern[patternIdx]) {
      ch = pre + ch + post;
      patternIdx += 1;

      // consecutive characters should increase the score more than linearly
      currScore += 1 + currScore;
    } else {
      currScore = 0;
    }
    totalScore += currScore;
    result[result.length] = ch;
  }

  // return rendered string if we have a match for every char
  if(patternIdx === pattern.length) {
    return {rendered: result.join(''), score: totalScore};
  }

  return null;
};

// The normal entry point. Filters `arr` for matches against `pattern`.
// It returns an array with matching values of the type:
//
//     [{
//         string:   '<b>lah' // The rendered string
//       , index:    2        // The index of the element in `arr`
//       , original: 'blah'   // The original element in `arr`
//     }]
//
// `opts` is an optional argument bag. Details:
//
//    opts = {
//        // string to put before a matching character
//        pre:     '<b>'
//
//        // string to put after matching character
//      , post:    '</b>'
//
//        // Optional function. Input is an entry in the given arr`,
//        // output should be the string to test `pattern` against.
//        // In this example, if `arr = [{crying: 'koala'}]` we would return
//        // 'koala'.
//      , extract: function(arg) { return arg.crying; }
//    }
fuzzy.filter = function(pattern, arr, opts) {
  opts = opts || {};
  return arr
    .reduce(function(prev, element, idx, arr) {
      var str = element;
      if(opts.extract) {
        str = opts.extract(element);
      }
      var rendered = fuzzy.match(pattern, str, opts);
      if(rendered != null) {
        prev[prev.length] = {
            string: rendered.rendered
          , score: rendered.score
          , index: idx
          , original: element
        };
      }
      return prev;
    }, [])

    // Sort by score. Browsers are inconsistent wrt stable/unstable
    // sorting, so force stable by using the index in the case of tie.
    // See http://ofb.net/~sethml/is-sort-stable.html
    .sort(function(a,b) {
      var compare = b.score - a.score;
      if(compare) return compare;
      return a.index - b.index;
    });
};


}());


},{}],3:[function(require,module,exports){
/*!
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//

var arr = [];

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,

	version = "2.1.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
	},

	isPlainObject: function( obj ) {
		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.constructor &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
			return false;
		}

		// If the function hasn't returned already, we're confident that
		// |obj| is a plain object, created by {} or constructed with new Object
		return true;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		// Support: Android<4.0, iOS<6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {
			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf("use strict") === 1 ) {
				script = document.createElement("script");
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {
			// Otherwise, avoid the DOM node creation, insertion
			// and removal by using an indirect global eval
				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];
	nodeType = context.nodeType;

	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	if ( !seed && documentIsHTML ) {

		// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
		if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document (jQuery #6963)
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType !== 1 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;
	parent = doc.defaultView;

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent !== parent.top ) {
		// IE11 does not have attachEvent, so all must suffer
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Support tests
	---------------------------------------------------------------------- */
	documentIsHTML = !isXML( doc );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\f]' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (oldCache = outerCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							outerCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context !== document && context;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is no seed and only one group
	if ( match.length === 1 ) {

		// Take a shortcut and set the context if the root selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
	});
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		}));
};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
});


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Support: Blackberry 4.6
					// gEBID returns nodes no longer in the document (#6963)
					if ( elem && elem.parentNode ) {
						// Inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.extend({
	dir: function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	}
});

jQuery.fn.extend({
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter(function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.unique(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.unique( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
});
var rnotwhite = (/\S+/g);



// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// Add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// If we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {
	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend({
	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
});

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed, false );
	window.removeEventListener( "load", completed, false );
	jQuery.ready();
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// We once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {
			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[0], key ) : emptyGet;
};


/**
 * Determines whether an object can have data
 */
jQuery.acceptData = function( owner ) {
	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};


function Data() {
	// Support: Android<4,
	// Old WebKit does not have Object.preventExtensions/freeze method,
	// return new empty object instead with no [[set]] accessor
	Object.defineProperty( this.cache = {}, 0, {
		get: function() {
			return {};
		}
	});

	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;
Data.accepts = jQuery.acceptData;

Data.prototype = {
	key: function( owner ) {
		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return the key for a frozen object.
		if ( !Data.accepts( owner ) ) {
			return 0;
		}

		var descriptor = {},
			// Check if the owner object already has a cache key
			unlock = owner[ this.expando ];

		// If not, create one
		if ( !unlock ) {
			unlock = Data.uid++;

			// Secure it in a non-enumerable, non-writable property
			try {
				descriptor[ this.expando ] = { value: unlock };
				Object.defineProperties( owner, descriptor );

			// Support: Android<4
			// Fallback to a less secure definition
			} catch ( e ) {
				descriptor[ this.expando ] = unlock;
				jQuery.extend( owner, descriptor );
			}
		}

		// Ensure the cache object
		if ( !this.cache[ unlock ] ) {
			this.cache[ unlock ] = {};
		}

		return unlock;
	},
	set: function( owner, data, value ) {
		var prop,
			// There may be an unlock assigned to this node,
			// if there is no entry for this "owner", create one inline
			// and set the unlock as though an owner entry had always existed
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {
			// Fresh assignments by object are shallow copied
			if ( jQuery.isEmptyObject( cache ) ) {
				jQuery.extend( this.cache[ unlock ], data );
			// Otherwise, copy the properties one-by-one to the cache object
			} else {
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		// Either a valid cache is found, or will be created.
		// New caches will be created and the unlock returned,
		// allowing direct access to the newly created
		// empty data object. A valid owner object must be provided.
		var cache = this.cache[ this.key( owner ) ];

		return key === undefined ?
			cache : cache[ key ];
	},
	access: function( owner, key, value ) {
		var stored;
		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				((key && typeof key === "string") && value === undefined) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase(key) );
		}

		// [*]When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		if ( key === undefined ) {
			this.cache[ unlock ] = {};

		} else {
			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );
				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;
			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}
	},
	hasData: function( owner ) {
		return !jQuery.isEmptyObject(
			this.cache[ owner[ this.expando ] ] || {}
		);
	},
	discard: function( owner ) {
		if ( owner[ this.expando ] ) {
			delete this.cache[ owner[ this.expando ] ];
		}
	}
};
var data_priv = new Data();

var data_user = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			data_user.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend({
	hasData: function( elem ) {
		return data_user.hasData( elem ) || data_priv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return data_user.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		data_user.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to data_priv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return data_priv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		data_priv.remove( elem, name );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = data_user.get( elem );

				if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					data_priv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				data_user.set( this, key );
			});
		}

		return access( this, function( value ) {
			var data,
				camelKey = jQuery.camelCase( key );

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {
				// Attempt to get data from the cache
				// with the key as-is
				data = data_user.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to get data from the cache
				// with the key camelized
				data = data_user.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each(function() {
				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = data_user.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				data_user.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf("-") !== -1 && data !== undefined ) {
					data_user.set( this, key, value );
				}
			});
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each(function() {
			data_user.remove( this, key );
		});
	}
});


jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = data_priv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = data_priv.access( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return data_priv.get( elem, key ) || data_priv.access( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				data_priv.remove( elem, [ type + "queue", key ] );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = data_priv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	};

var rcheckableType = (/^(?:checkbox|radio)$/i);



(function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
})();
var strundefined = typeof undefined;



support.focusinBubbles = "onfocusin" in window;


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.hasData( elem ) && data_priv.get( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;
			data_priv.remove( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.disabled !== true || event.type !== "click" ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome<28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle, false );
	}
};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				// Support: Android<4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && e.preventDefault ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && e.stopPropagation ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// Support: Chrome 15+
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// Support: Firefox, Chrome, Safari
// Create "bubbling" focus and blur events
if ( !support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					data_priv.remove( doc, fix );

				} else {
					data_priv.access( doc, fix, attaches );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

// Support: IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: 1.x compatibility
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute("type");
	}

	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		data_priv.set(
			elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
		);
	}
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( data_priv.hasData( src ) ) {
		pdataOld = data_priv.access( src );
		pdataCur = data_priv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( data_user.hasData( src ) ) {
		udataOld = data_user.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		data_user.set( dest, udataCur );
	}
}

function getAll( context, tag ) {
	var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
			context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	},

	cleanData: function( elems ) {
		var data, elem, type, key,
			special = jQuery.event.special,
			i = 0;

		for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
			if ( jQuery.acceptData( elem ) ) {
				key = elem[ data_priv.expando ];

				if ( key && (data = data_priv.cache[ key ]) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}
					if ( data_priv.cache[ key ] ) {
						// Discard any remaining `private` data
						delete data_priv.cache[ key ];
					}
				}
			}
			// Discard any remaining `user` data
			delete data_user.cache[ elem[ data_user.expando ] ];
		}
	}
});

jQuery.fn.extend({
	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each(function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				});
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	remove: function( selector, keepData /* Internal Use Only */ ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map(function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var arg = arguments[ 0 ];

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			arg = this.parentNode;

			jQuery.cleanData( getAll( this ) );

			if ( arg ) {
				arg.replaceChild( elem, this );
			}
		});

		// Force removal if there was no new content (e.g., from empty arguments)
		return arg && (arg.length || arg.nodeType) ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							// Support: QtWebKit
							// jQuery.merge because push.apply(_, arraylike) throws
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});


var iframe,
	elemdisplay = {};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var style,
		elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

			// Use of this method is a temporary fix (more like optimization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = (/^margin/);

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {
		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		if ( elem.ownerDocument.defaultView.opener ) {
			return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
		}

		return window.getComputedStyle( elem, null );
	};



function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];
	}

	if ( computed ) {

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: iOS < 6
		// A tribute to the "awesome hack by Dean Edwards"
		// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
		// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
		if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?
		// Support: IE
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {
	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {
				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return (this.get = hookFn).apply( this, arguments );
		}
	};
}


(function() {
	var pixelPositionVal, boxSizingReliableVal,
		docElem = document.documentElement,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	if ( !div.style ) {
		return;
	}

	// Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
		"position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computePixelPositionAndBoxSizingReliable() {
		div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
			"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
			"border:1px;padding:1px;width:4px;position:absolute";
		div.innerHTML = "";
		docElem.appendChild( container );

		var divStyle = window.getComputedStyle( div, null );
		pixelPositionVal = divStyle.top !== "1%";
		boxSizingReliableVal = divStyle.width === "4px";

		docElem.removeChild( container );
	}

	// Support: node.js jsdom
	// Don't assume that getComputedStyle is a property of the global object
	if ( window.getComputedStyle ) {
		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computePixelPositionAndBoxSizingReliable();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computePixelPositionAndBoxSizingReliable();
				}
				return boxSizingReliableVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				docElem.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );

				docElem.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		});
	}
})();


// A method for quickly swapping in/out CSS properties to get correct calculations.
jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var
	// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[0].toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = data_priv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend({

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Support: IE9-11+
			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
				style[ name ] = value;
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return jQuery.swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});

jQuery.fn.extend({
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	}
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*.
					// Use string for doubling so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur(),
				// break the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		} ]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = data_priv.get( elem, "fxshow" );

	// Handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// Ensure the complete handler is called before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// Height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always(function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		});
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = data_priv.access( elem, "fxshow", {} );
		}

		// Store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;

			data_priv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// Don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || data_priv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = data_priv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = data_priv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		});
	}
});

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = setTimeout( next, time );
		hooks.stop = function() {
			clearTimeout( timeout );
		};
	});
};


(function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<=11+
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
})();


var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	}
});

jQuery.extend({
	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	}
});

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {
			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
});




var rfocusable = /^(?:input|select|textarea|button)$/i;

jQuery.fn.extend({
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each(function() {
			delete this[ jQuery.propFix[ name ] || name ];
		});
	}
});

jQuery.extend({
	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
					elem.tabIndex :
					-1;
			}
		}
	}
});

if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend({
	addClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = arguments.length === 0 || typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// Toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					data_priv.set( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	}
});




var rreturn = /\r/g;

jQuery.fn.extend({
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// Handle most common string cases
					ret.replace(rreturn, "") :
					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE6-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
						optionSet = true;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});




// Return jQuery for attributes-only inclusion


jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});


var nonce = jQuery.now();

var rquery = (/\?/);



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		tmp = new DOMParser();
		xml = tmp.parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Document location
	ajaxLocation = window.location.href,

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,
			// URL without anti-cache param
			cacheURL,
			// Response headers
			responseHeadersString,
			responseHeaders,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});


jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};


jQuery.fn.extend({
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapAll( html.call(this, i) );
			});
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});


jQuery.expr.filters.hidden = function( elem ) {
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
};
jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});


jQuery.ajaxSettings.xhr = function() {
	try {
		return new XMLHttpRequest();
	} catch( e ) {}
};

var xhrId = 0,
	xhrCallbacks = {},
	xhrSuccessStatus = {
		// file protocol always yields status code 0, assume 200
		0: 200,
		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE9
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]();
		}
	});
}

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport(function( options ) {
	var callback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr(),
					id = ++xhrId;

				xhr.open( options.type, options.url, options.async, options.username, options.password );

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers["X-Requested-With"] ) {
					headers["X-Requested-With"] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							delete xhrCallbacks[ id ];
							callback = xhr.onload = xhr.onerror = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {
								complete(
									// file: protocol always yields status 0; see #8605, #14207
									xhr.status,
									xhr.statusText
								);
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,
									// Support: IE9
									// Accessing binary-data responseText throws an exception
									// (#11426)
									typeof xhr.responseText === "string" ? {
										text: xhr.responseText
									} : undefined,
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				xhr.onerror = callback("error");

				// Create the abort callback
				callback = xhrCallbacks[ id ] = callback("abort");

				try {
					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {
					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {
	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery("<script>").prop({
					async: true,
					charset: s.scriptCharset,
					src: s.url
				}).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[1] ) ];
	}

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
});




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};




var docElem = window.document.documentElement;

/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend({
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// Support: BlackBerry 5, iOS 3 (original iPhone)
		// If we don't have gBCR, just use 0,0 rather than error
		if ( typeof elem.getBoundingClientRect !== strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || docElem;
		});
	}
});

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : window.pageXOffset,
					top ? val : window.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

// Support: Safari<7+, Chrome<37+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );
				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
});


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});


// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	});
}




var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === strundefined ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;

}));

},{}],4:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dataTocMinJson = require('../data/toc.min.json');

var _dataTocMinJson2 = _interopRequireDefault(_dataTocMinJson);

var _fuzzy = require('fuzzy');

var _fuzzy2 = _interopRequireDefault(_fuzzy);

var $ = require('jquery');
window.$ = $;

var els = ['Root', 'SearchWrapper', 'SearchInput', 'SearchItems'].reduce(function (o, key) {
  o[key] = $('.' + key);
  return o;
}, {});

els.SearchInput.on('input', function () {
  var val = els.SearchInput.val();
  console.log(val);
  updateItems(val);
});

els.SearchInput.focus();

$(document).on('click', function (e) {
  if (e.target.href) {
    e.preventDefault();
    location.href = '/es6-spec/' + e.target.pathname;
  }
});

var searchItemLimit = 20;
function makeItem(name, id) {
  var wrapper = $('<div>').addClass('SearchItem');
  var link = $('<a>', {
    'class': 'SearchLink',
    href: '/sec/' + id + '.html'
  });
  link.text(name);

  link.appendTo(wrapper);
  console.log(name, id, wrapper);

  return wrapper;
}

function updateItems(query) {
  requestAnimationFrame(function () {
    var matches = _fuzzy2['default'].filter(query, _dataTocMinJson2['default'], {
      extract: function extract(x) {
        return x.text;
      }
    });

    els.SearchItems.html('');
    var items = matches.map(function (x) {
      return x.original;
    });
    var trimmed = 0;

    if (items.length > searchItemLimit) {
      items = items.slice(0, searchItemLimit);
      trimmed = items.length - searchItemLimit;
    }

    console.log(items);
    items.forEach(function (item) {
      var el = makeItem(item.text, item.id);
      $(el).appendTo(els.SearchItems);
    });

    if (trimmed) {
      var note = $('<div>').text('and ' + trimmed + ' more');
      $(note).appendTo(els.SearchItems);
    }
  });
}

function fetchHtml(id, cb) {
  $.getJSON('data/sec/' + id + '.json', function (res) {
    cb(null, res.html);
  });
}

},{"../data/toc.min.json":1,"fuzzy":2,"jquery":3}]},{},[4])