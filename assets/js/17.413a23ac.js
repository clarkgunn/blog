(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{167:function(t,e,a){t.exports=a.p+"assets/img/meme.071407e7.jpg"},440:function(t,e,a){"use strict";a.r(e);var s=a(10),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"conciliating-laravel-and-ddd-part-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conciliating-laravel-and-ddd-part-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Conciliating Laravel and DDD (part 2)")]),t._v(" "),s("p",[t._v("In "),s("a",{attrs:{href:"/conciliating-laravel-and-ddd"}},[t._v("a previous article")]),t._v(" we concluded that, when implementing DDD with Laravel, the Framework itself should become our new programming paradigm in order to leverage all of its goodness and avoid fighting it. This implies allowing the Eloquent beast to enter our domain layer. A dangerous decision that I will tackle here 🦁.")]),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("In various projects I have found myself submerged with Eloquent models that simply became some kind of configuration files. Each had their fair share of accessors "),s("code",[t._v("getFirstnameAttribute()")]),t._v(", mutators "),s("code",[t._v("setFullnameAttribute()")]),t._v(", relationship methods "),s("code",[t._v("comments()")]),t._v(", query scopes "),s("code",[t._v("scopeActive()")]),t._v(", model events "),s("code",[t._v("static::saving(function($model) {...})")]),t._v(", etc. Not to mention: "),s("code",[t._v("$fillable")]),t._v(", "),s("code",[t._v("$guarded")]),t._v(", "),s("code",[t._v("$visible")]),t._v(", "),s("code",[t._v("$hidden")]),t._v(", "),s("code",[t._v("$appends")]),t._v(", and even some provided by packages. My solution when the complexity increased was to extract some of the functions into dedicated traits. For example I would have a "),s("code",[t._v("UserRepository")]),t._v(" trait with all query scopes inside and a "),s("code",[t._v("UserPresenter")]),t._v(" trait with all accessors inside. It helps surviving a little longer but I don't have to tell you that it does not make miracles in the long term. Moreover, in a Domain-Driven environment it completely overshadows the semantic of the model objects by assimilating them as a set of technical draws.")]),t._v(" "),s("p",[t._v("Now that we introduced Eloquent to DDD, we did not magically remove all of these constraints. In fact they are even more dangerous now that the focus on the domain is at stake. We will go through each of these challenges and see how to overcome them "),s("strong",[t._v("if")]),t._v(" we can overcome them. Some sacrifices will have to be made.")]),t._v(" "),s("p",[t._v("It is important to keep in mind how important it is to reach a balance in keeping focus on the domain ("),s("strong",[t._v("rule A")]),t._v(") whilst staying true to the framework and, particularly in that case, active records ("),s("strong",[t._v("rule B")]),t._v("). When none of them can be satisfied together, we will prioritize "),s("strong",[t._v("rule B")]),t._v(" and stay true to Laravel.")]),t._v(" "),s("h2",{attrs:{id:"implicit-unmapped-attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implicit-unmapped-attributes","aria-hidden":"true"}},[t._v("#")]),t._v(" Implicit unmapped attributes")]),t._v(" "),s("p",[t._v("The disturbing thing about Eloquent models is that even when they are completely empty, there is already so much they can do. For example, can you tell me what are the attributes of the following class?")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Customer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Database"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Eloquent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Model")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Of course not. Could be none. Could be one hundred. This is very handy when its one hundred but not very convenient in the domain layer where the attributes of an object need to be explicit so that we can reason about them. So what should we do?")]),t._v(" "),s("ul",[s("li",[s("p",[s("em",[t._v("Should we add them as class properties anyway and ignore the "),s("code",[t._v("$attributes")]),t._v(" of Eloquent?")]),t._v("\nWithout the "),s("code",[t._v("$attributes")]),t._v(" property, we miss out on the majority of features provided by Eloquent. We might as well use POPOs and data mappers.")])]),t._v(" "),s("li",[s("p",[s("em",[t._v("Can we at least initialize those attributes in the constructor?")]),t._v("\nWe could, but overriding the constructor with one that accepts arguments will make a lot of Eloquent function fail as most static calls proxy to an empty model using "),s("code",[t._v("new static")]),t._v(", e.g. "),s("a",{attrs:{href:"https://github.com/laravel/framework/blob/5.6/src/Illuminate/Database/Eloquent/Model.php#L1515",target:"_blank",rel:"noopener noreferrer"}},[t._v("the magic method "),s("code",[t._v("__callStatic")]),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("li",[s("p",[s("em",[t._v("What about using "),s("code",[t._v("$fillable")]),t._v(" and "),s("code",[t._v("$visible")]),t._v(" to make them obvious?")]),t._v("\nThey are actually here for a reason and using them for another purpose feels like hacking the framework.")])])]),t._v(" "),s("p",[t._v("Okay let's say we accept implicit attributes. There is actually a deeper problem to that. What about when the attributes of the domain do not match the attributes in our database? "),s("strong",[t._v("Some mapping has to happen somewhere right?")])]),t._v(" "),s("ul",[s("li",[s("em",[t._v("How are we dealing with this now?")]),t._v("\nOur "),s("code",[t._v("$attributes")]),t._v(" property only reflects the columns of our table. We then use accessors and mutators to generate some domain attributes based on some database attributes.")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cargo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Model")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTrackingIdAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTrackingIdAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("p",[s("em",[t._v("Why can't we do that with DDD?")]),t._v("\nThe consequence is that the domain will know things about the database — and possibly bypass invariants from our repositories. The domain model basically becomes a data mapper.")])]),t._v(" "),s("li",[s("p",[s("em",[t._v("So what's the solution?!")]),t._v(" 😡\nThere is none. Using Eloquent within the domain layer can unfortunately not satisfy all of our constraints. This time, we have to choose a side: team DDD, or team Laravel? rule A or B?")])])]),t._v(" "),s("p",[t._v("If it's any consolation to you, this situation might be messy but this is how we've always worked with Eloquent before. Trying to fight it or add a package that uses a version of Eloquent that is more adequate to DDD will only push us and future developers out of our comfort zone. Any implementation that tries to fight this aspect of Eloquent models (e.g. extracting mutators and accessors to a trait in the application layers) will increase the complexity level and the discomfort of our Laravel programmers.")]),t._v(" "),s("p",[t._v("Since we made the commitment to stay true to Laravel, we will accept that burden and make sure to minimize the distraction it produces on the domain.")]),t._v(" "),s("h2",{attrs:{id:"value-objects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#value-objects","aria-hidden":"true"}},[t._v("#")]),t._v(" Value objects")]),t._v(" "),s("p",[t._v("Now that we've accepted we are doomed using Eloquent the way it was designed to, adding some Value Objects within aggregates is really simple.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cargo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Model")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDeliverySpecificationAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DeliverySpecification")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("deadline")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("destination")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDeliverySpecificationAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$deliverySpecification")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("deadline")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$deliverySpecification")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDeadline")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("destination")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$deliverySpecification")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDestination")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("At least our dear Value Objects don't need to extend Eloquent and can have the luxury of having their own constructor and properties.")]),t._v(" "),s("h2",{attrs:{id:"relationship-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#relationship-methods","aria-hidden":"true"}},[t._v("#")]),t._v(" Relationship methods")]),t._v(" "),s("p",[t._v("Another interesting challenge. What is the problem of using the traditional following approach?")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DeliveryHistory")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Model")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handlingEvents")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasMany")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HandlingEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("We are completely bypassing the bottleneck provided by repositories. One can create and persist a new handling event without using the "),s("code",[t._v("HandlingEventRepository")]),t._v(" interface via a simple "),s("code",[t._v("$deliveryHistory->handlingEvents()->create($databaseData)")]),t._v(".")]),t._v(" "),s("p",[t._v("First of all, this is one of my favorite features of Eloquent and I wouldn't want to lose it. It caches relationships for us, it can eagerload them and much more. Also, I don't really see myself wanting to use a repository every time I want to retrieve a relationship. Finally, I will question the use of repositories all-together in the following section.")]),t._v(" "),s("p",[t._v("However if you really want to use repositories as database boundaries whilst using relationship methods, my suggestion would be to use these relationship methods but only to access the relationship and not to modify it. Anytime we want to create, update or delete a relationship, we access the appropriate repository. Note that nothing stops the implementation of repositories to fully use these relationship methods — e.g. "),s("code",[t._v("$model->relationship()->attach()")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"repositories"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#repositories","aria-hidden":"true"}},[t._v("#")]),t._v(" Repositories")]),t._v(" "),s("p",[t._v("When I first wrote this article, I basically outputed a list of DOs and DONTs when using Eloquent within the domain layer. Before publishing it I decided to test my restrictions within a small dummy application that has a somewhat complex set of requirements to justify the use of DDD.")]),t._v(" "),s("p",[s("small",[t._v('The application basically lets people write the beginning of a story with two decisions at the end. Then other users could write the next part of the story for each decision. We then end up with a story that looks like a binary tree. In order to make the stories fun and enjoyable, the application came with a set of rules like "Users can thumb up or down any page that they read. The initiator of a story can correct a page that has a negative grade and more than 10 views".')])]),t._v(" "),s("p",[t._v("When developing this application, I started by using repository interfaces in the domain layer and repository implementations in the application layer within matching modules. It seemed nice at first to just ask the application layer what we need and let it take care of it for us, but in practice, my code ended up with "),s("strong",[t._v("a lot")]),t._v(" of repository injections.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(167),alt:"24k4mh"}})]),t._v(" "),s("p",[t._v("Then when I ended up doing things like this in my controller...")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'page.show'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'page'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("repository")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("... instead of...")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Page "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$page")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'page.show'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compact")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'page'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("... I had enough!")]),t._v(" "),s("p",[t._v("If we are using Eloquent inside our domain layer, then inevitably our domain already knows a lot about our database. Too much for a pure DDD implementation that's for sure. At this point, we don't want to decouple our database entirely from our domain but we do want to minimize its disturbance which Eloquent already does very well.")]),t._v(" "),s("p",[t._v("I am not saying that repositories should not be used at all within the domain layer but rather that we shouldn't default to use them for no reason. Personally, I ended up removing all of repository interfaces, classes, bindings and injections and it felt good!")]),t._v(" "),s("p",[t._v("Side note on application modules: When removing repository implementations I ended up with empty application modules — Since my application was not complex enough to have third party boundaries, etc. As a result I deleted all of their folders and I'll recreate them as I need them in the future. One could probably spread folders like Providers, Mails, Policies, etc. in their respective application modules but I find that too confusing when coming back to the code. I prefer staying true to the default Laravel folder structure on that one.")]),t._v(" "),s("h2",{attrs:{id:"query-scopes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-scopes","aria-hidden":"true"}},[t._v("#")]),t._v(" Query scopes")]),t._v(" "),s("p",[t._v("Local query scopes are very helpful to separate our queries into multiple chainable methods. Eloquent models tend to have a lot of them which could eventually make us lose focus of our domain model.")]),t._v(" "),s("p",[t._v("If a model does not have a matching repository, I would simply use local scopes on that model to keep things clear. However when that model starts having a dangerous amount of them, it might be a smell for creating a repository, or another mechanism that will extract that logic elsewhere. For example if a "),s("code",[t._v("Customer")]),t._v(" model uses a lot of query scopes as filters, we could extract them into a "),s("code",[t._v("CustomerFilters")]),t._v(" object which is then used by the application layer (See "),s("a",{attrs:{href:"https://laracasts.com/series/eloquent-techniques/episodes/4",target:"_blank",rel:"noopener noreferrer"}},[t._v("episode in Laracast"),s("OutboundLink")],1),t._v(").")]),t._v(" "),s("p",[t._v("Basically, use them until they give you nightmares, then be creative.")]),t._v(" "),s("h2",{attrs:{id:"presenter-responsibility"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#presenter-responsibility","aria-hidden":"true"}},[t._v("#")]),t._v(" Presenter responsibility")]),t._v(" "),s("p",[t._v("Since we've allowed the use of accessors and mutators inside the domain models, we could in theory use them to display data that is only needed for our front-end like combining "),s("code",[t._v("firstname")]),t._v(" and "),s("code",[t._v("lastname")]),t._v(" into "),s("code",[t._v("fullname")]),t._v(" and so on.")]),t._v(" "),s("p",[t._v("Unless the new property makes sense in the domain layer and the ubiquitous language, I think we should avoid adding an accessor for it. We've accepted that Eloquent is inevitably going to allow database knowledge inside our domain layer, I would rather avoid adding some interface knowledge as well. Besides, there are a few things we can do to deal with "),s("em",[t._v("presenter responsibility")]),t._v(":")]),t._v(" "),s("ul",[s("li",[s("em",[t._v("Presenter")]),t._v(" objects can be added to the corresponding application modules.")]),t._v(" "),s("li",[t._v("Using the API interface (from Laravel 5.5) allows you to define "),s("em",[t._v("Eloquent Resources")]),t._v(" where you can design the way you want your models to be shown to the external world.")]),t._v(" "),s("li",[t._v("Sometime a quick computation within the controller is enough.")])]),t._v(" "),s("h2",{attrs:{id:"validation-and-authorization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validation-and-authorization","aria-hidden":"true"}},[t._v("#")]),t._v(" Validation and authorization")]),t._v(" "),s("p",[t._v("When implementing the rules and moderations of the "),s("em",[t._v("collaborative story application")]),t._v(" mentioned above, I first tried to insert all of those in the domain layer. After all, they are business requirements. What could have easily been done with a "),s("code",[t._v("Policy")]),t._v(" or "),s("code",[t._v("Request")]),t._v(" class, took a lot more effort and complexity within the domain layer for a much less flexible implementation.")]),t._v(" "),s("p",[t._v("Therefore, when it comes to validation and authorization, I think it makes sense to stay true to the framework and regroup all of that logic in one familiar place.")]),t._v(" "),s("h2",{attrs:{id:"boot-and-model-events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#boot-and-model-events","aria-hidden":"true"}},[t._v("#")]),t._v(" Boot and model events")]),t._v(" "),s("p",[t._v("Last but not least, the "),s("code",[t._v("boot()")]),t._v(" static method and its model event listeners — a.k.a Magic! ✨")]),t._v(" "),s("p",[t._v("I love these kinds of implementation and I use them a lot in my Laravel projects or when I create packages. However the more I come back to these kind of projects, the more I regret having done things like this. Even though it looks very sexy at first when you just need to call "),s("code",[t._v("$lead->update()")]),t._v(" and it will take care of synchronizing the lead with your external CRM, log an activity, send a notification to the sales manager and make you a cup of tea, when the complexity grows, the magic quickly becomes unmaintainable.")]),t._v(" "),s("p",[t._v("This is even more critical now that Eloquent lives in the domain layer. If we really need some model events to trigger some business logic, then we could consider some work arounds like creating an "),s("em",[t._v("Observer")]),t._v(" object that lives in the application layer.")]),t._v(" "),s("p",[t._v("Note that the same goes with magic boot methods of traits from external packages. They are very useful to get us started with whichever package but we need to be careful not to submerge our applications with hidden execution flows — in unpredictable order.")]),t._v(" "),s("h2",{attrs:{id:"conclusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),s("p",[t._v("Using active records within a domain layer is a challenge that comes with sacrifices. Sacrifices that most DDD purists just could not put up with.")]),t._v(" "),s("p",[t._v("When applying my own DDD restrictions within the "),s("em",[t._v("collaborative story application")]),t._v(", I started with a DDD-focused implementation which little by little refactored towards a more traditional Laravel application with an extra "),s("code",[t._v("Domain")]),t._v(" namespace.")]),t._v(" "),s("p",[t._v("Even though the resulting implementation is far from reaching all the values of Domain-Driven Design, I found that extracting my models into a separate namespace helped me be more creative and reduce the granularity of my classes.")]),t._v(" "),s("p",[t._v("The writing of this article also helped me distinguish two distinct aspects of Eloquent models:")]),t._v(" "),s("ul",[s("li",[t._v("The configurations and attributes (which is now the top half of my classes)")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Story")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$with")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'pages'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$guarded")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFirstPageAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scopePopular")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("The domain logic (which is now the bottom half of my classes)")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Story")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("containsPage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$page")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("computeDeeperLevel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readBy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("averageVoteFrom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("The "),s("em",[t._v("configurations and attributes")]),t._v(" part might seem too overwhelming for our domain layer but in my opinion it isn't much more overwhelming than having lots of getters and setters clustering our classes. As mentioned before, we are simply using a different programming paradigm that comes with its own way of defining attributes.")]),t._v(" "),s("p",[t._v("I would love to discover other opinions on the matter and new way to tame the Eloquent beast within the domain layer. 💡")])])}),[],!1,null,null,null);e.default=n.exports}}]);