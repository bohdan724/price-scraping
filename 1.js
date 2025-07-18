const axios = require('axios');

const payload = {
    "operationName": "Core_Marketplace_CombinedMarketplaceSearch",
    "variables": {
        "inputListings": {
            "query": "Boss BD-2 Blues Driver",
            "categorySlugs": [
                "effects-and-pedals"
            ],
            "brandSlugs": [
                "boss"
            ],
            "conditionSlugs": [],
            "shippingRegionCodes": [],
            "itemState": [],
            "itemCity": [],
            "curatedSetSlugs": [],
            "saleSlugs": [],
            "withProximityFilter": {
                "proximity": false
            },
            "boostedItemRegionCode": "JP",
            "useExperimentalRecall": true,
            "traitValues": [],
            "excludeCategoryUuids": [],
            "excludeBrandSlugs": [],
            "likelihoodToSellExperimentGroup": 0,
            "countryOfOrigin": [],
            "contexts": [],
            "autodirects": "IMPROVED_DATA",
            "multiClientExperiments": [
                {
                    "name": "spell_check_autocorrect",
                    "group": "1"
                }
            ],
            "canonicalFinishes": [],
            "skipAutocorrect": false,
            "limit": 45,
            "offset": 0,
            "fallbackToOr": true,
            "collapsible": null,
            "sort": "NONE"
        },
        "inputBumped": {
            "query": "Boss BD-2 Blues Driver",
            "categorySlugs": [
                "effects-and-pedals"
            ],
            "brandSlugs": [
                "boss"
            ],
            "conditionSlugs": [],
            "shippingRegionCodes": [],
            "itemState": [],
            "itemCity": [],
            "curatedSetSlugs": [],
            "saleSlugs": [],
            "withProximityFilter": {
                "proximity": false
            },
            "boostedItemRegionCode": "JP",
            "useExperimentalRecall": true,
            "traitValues": [],
            "excludeCategoryUuids": [],
            "excludeBrandSlugs": [],
            "likelihoodToSellExperimentGroup": 0,
            "countryOfOrigin": [],
            "contexts": [],
            "autodirects": "IMPROVED_DATA",
            "multiClientExperiments": [
                {
                    "name": "spell_check_autocorrect",
                    "group": "1"
                }
            ],
            "canonicalFinishes": [],
            "skipAutocorrect": false,
            "limit": 15,
            "offset": 0,
            "boostByBumpRate": true,
            "bumpedOnly": true,
            "sort": "NONE"
        },
        "inputAggs": {
            "query": "Boss BD-2 Blues Driver",
            "categorySlugs": [
                "effects-and-pedals"
            ],
            "brandSlugs": [
                "boss"
            ],
            "conditionSlugs": [],
            "shippingRegionCodes": [],
            "itemState": [],
            "itemCity": [],
            "curatedSetSlugs": [],
            "saleSlugs": [],
            "withProximityFilter": {
                "proximity": false
            },
            "boostedItemRegionCode": "JP",
            "useExperimentalRecall": true,
            "traitValues": [],
            "excludeCategoryUuids": [],
            "excludeBrandSlugs": [],
            "likelihoodToSellExperimentGroup": 0,
            "countryOfOrigin": [],
            "contexts": [],
            "autodirects": "IMPROVED_DATA",
            "multiClientExperiments": [
                {
                    "name": "spell_check_autocorrect",
                    "group": "1"
                }
            ],
            "canonicalFinishes": [],
            "skipAutocorrect": false,
            "limit": 0,
            "withAggregations": [
                "CATEGORY_SLUGS",
                "BRAND_SLUGS",
                "CONDITION_SLUGS",
                "DECADES",
                "CURATED_SETS",
                "COUNTRY_OF_ORIGIN"
            ],
            "fallbackToOr": true
        },
        "shouldntLoadBumps": false,
        "shouldntLoadSuggestions": false,
        "usingListView": false,
        "signalGroups": [
            "MP_GRID_CARD"
        ],
        "useSignalSystem": false
    },
    "query": "query Core_Marketplace_CombinedMarketplaceSearch($inputListings: Input_reverb_search_ListingsSearchRequest, $inputBumped: Input_reverb_search_ListingsSearchRequest, $inputAggs: Input_reverb_search_ListingsSearchRequest, $shouldntLoadBumps: Boolean!, $shouldntLoadSuggestions: Boolean!, $usingListView: Boolean!, $signalGroups: [reverb_signals_Signal_Group], $useSignalSystem: Boolean!) {\n  bumpedSearch: listingsSearch(input: $inputBumped) @skip(if: $shouldntLoadBumps) {\n    listings {\n      _id\n      ...ListingCardFields\n      ...WatchBadgeData\n      ...BumpKey\n      ...ShopFields\n      ...ListViewListings @include(if: $usingListView)\n      signals(input: {groups: $signalGroups}) @include(if: $useSignalSystem) {\n        ...ListingCardSignalsData\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  aggsSearch: listingsSearch(input: $inputAggs) {\n    filters {\n      ...NestedFilter\n      __typename\n    }\n    __typename\n  }\n  listingsSearch(input: $inputListings) {\n    total\n    offset\n    limit\n    suggestedQueries\n    eligibleAutodirects\n    correctedTo\n    correctedFrom\n    listings {\n      _id\n      esScore\n      ...ListingCardFields\n      ...WatchBadgeData\n      ...InOtherCartsCardData @skip(if: $useSignalSystem)\n      ...ShopFields\n      ...ListViewListings @include(if: $usingListView)\n      signals(input: {groups: $signalGroups}) @include(if: $useSignalSystem) {\n        ...ListingCardSignalsData\n        __typename\n      }\n      __typename\n    }\n    fallbackListings {\n      _id\n      ...ListingCardFields\n      ...InOtherCartsCardData @skip(if: $useSignalSystem)\n      ...WatchBadgeData\n      signals(input: {groups: $signalGroups}) @include(if: $useSignalSystem) {\n        ...ListingCardSignalsData\n        __typename\n      }\n      __typename\n    }\n    suggestions @skip(if: $shouldntLoadSuggestions) {\n      ...MarketplaceSuggestions\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ListingCardFields on Listing {\n  _id\n  ...ListingForBuyerFields\n  ...WatchBadgeData\n  ...ListingCreateOfferButtonData\n  __typename\n}\n\nfragment ListingForBuyerFields on Listing {\n  _id\n  id\n  title\n  slug\n  listingType\n  make\n  model\n  upc\n  state\n  stateDescription\n  bumped\n  watching\n  soldAsIs\n  usOutlet\n  publishedAt {\n    seconds\n    __typename\n  }\n  condition {\n    displayName\n    conditionSlug\n    conditionUuid\n    __typename\n  }\n  pricing {\n    buyerPrice {\n      display\n      currency\n      amount\n      amountCents\n      __typename\n    }\n    originalPrice {\n      display\n      __typename\n    }\n    ribbon {\n      display\n      reason\n      __typename\n    }\n    __typename\n  }\n  images(\n    input: {transform: \"card_square\", count: 3, scope: \"photos\", type: \"Product\"}\n  ) {\n    source\n    __typename\n  }\n  shipping {\n    shippingPrices {\n      _id\n      shippingMethod\n      carrierCalculated\n      destinationPostalCodeNeeded\n      rate {\n        amount\n        amountCents\n        currency\n        display\n        __typename\n      }\n      __typename\n    }\n    freeExpeditedShipping\n    localPickupOnly\n    localPickup\n    __typename\n  }\n  shop {\n    _id\n    name\n    returnPolicy {\n      usedReturnWindowDays\n      newReturnWindowDays\n      __typename\n    }\n    address {\n      _id\n      locality\n      region\n      country {\n        _id\n        countryCode\n        name\n        __typename\n      }\n      displayLocation\n      __typename\n    }\n    __typename\n  }\n  ...ListingForBuyerShippingFields\n  ...ListingGreatValueData\n  ...ListingCardCPOData\n  __typename\n}\n\nfragment ListingGreatValueData on Listing {\n  _id\n  pricing {\n    buyerPrice {\n      currency\n      amountCents\n      __typename\n    }\n    __typename\n  }\n  condition {\n    conditionSlug\n    __typename\n  }\n  priceRecommendation {\n    priceMiddle {\n      amountCents\n      currency\n      __typename\n    }\n    __typename\n  }\n  shop {\n    _id\n    address {\n      _id\n      country {\n        _id\n        countryCode\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  currency\n  __typename\n}\n\nfragment ListingForBuyerShippingFields on Listing {\n  _id\n  shipping {\n    freeExpeditedShipping\n    localPickupOnly\n    shippingPrices {\n      _id\n      shippingMethod\n      carrierCalculated\n      regional\n      destinationPostalCodeNeeded\n      postalCode\n      rate {\n        amount\n        amountCents\n        currency\n        display\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment ListingCardCPOData on Listing {\n  _id\n  id\n  certifiedPreOwned {\n    title\n    badgeIconUrl\n    __typename\n  }\n  __typename\n}\n\nfragment ListingCreateOfferButtonData on Listing {\n  id\n  _id\n  state\n  offersEnabled\n  listingType\n  sellerId\n  isBuyerOfferEligible\n  ...mParticleListingFields\n  __typename\n}\n\nfragment mParticleListingFields on Listing {\n  id\n  _id\n  title\n  brandSlug\n  categoryRootUuid\n  make\n  categoryUuids\n  state\n  listingType\n  bumpEligible\n  shopId\n  inventory\n  soldAsIs\n  acceptedPaymentMethods\n  currency\n  usOutlet\n  condition {\n    conditionUuid\n    conditionSlug\n    __typename\n  }\n  categories {\n    _id\n    slug\n    rootSlug\n    __typename\n  }\n  csp {\n    _id\n    id\n    slug\n    brand {\n      _id\n      slug\n      __typename\n    }\n    __typename\n  }\n  pricing {\n    buyerPrice {\n      amount\n      currency\n      amountCents\n      __typename\n    }\n    __typename\n  }\n  publishedAt {\n    seconds\n    __typename\n  }\n  sale {\n    _id\n    id\n    code\n    buyerIneligibilityReason\n    __typename\n  }\n  shipping {\n    shippingPrices {\n      _id\n      shippingMethod\n      carrierCalculated\n      destinationPostalCodeNeeded\n      rate {\n        amount\n        amountCents\n        currency\n        display\n        __typename\n      }\n      __typename\n    }\n    freeExpeditedShipping\n    localPickupOnly\n    localPickup\n    __typename\n  }\n  certifiedPreOwned {\n    title\n    badgeIconUrl\n    __typename\n  }\n  shop {\n    _id\n    address {\n      _id\n      countryCode\n      __typename\n    }\n    returnPolicy {\n      _id\n      newReturnWindowDays\n      usedReturnWindowDays\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment WatchBadgeData on Listing {\n  _id\n  id\n  title\n  sellerId\n  watching\n  watchThumbnails: images(\n    input: {type: \"Product\", scope: \"photos\", transform: \"card_square\", count: 1}\n  ) {\n    _id\n    source\n    __typename\n  }\n  __typename\n}\n\nfragment BumpKey on Listing {\n  _id\n  bumpKey {\n    key\n    __typename\n  }\n  __typename\n}\n\nfragment ShopFields on Listing {\n  _id\n  shop {\n    _id\n    address {\n      _id\n      locality\n      countryCode\n      region\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment InOtherCartsCardData on Listing {\n  _id\n  id\n  otherBuyersWithListingInCartCounts\n  __typename\n}\n\nfragment NestedFilter on reverb_search_Filter {\n  name\n  key\n  aggregationName\n  widgetType\n  options {\n    count {\n      value\n      __typename\n    }\n    name\n    selected\n    autoselected\n    paramName\n    setValues\n    unsetValues\n    all\n    optionValue\n    trackingValue\n    subFilter {\n      widgetType\n      options {\n        count {\n          value\n          __typename\n        }\n        name\n        selected\n        autoselected\n        paramName\n        setValues\n        unsetValues\n        all\n        optionValue\n        trackingValue\n        subFilter {\n          widgetType\n          options {\n            count {\n              value\n              __typename\n            }\n            name\n            selected\n            autoselected\n            paramName\n            setValues\n            unsetValues\n            all\n            optionValue\n            trackingValue\n            subFilter {\n              widgetType\n              options {\n                count {\n                  value\n                  __typename\n                }\n                name\n                selected\n                autoselected\n                paramName\n                setValues\n                unsetValues\n                all\n                optionValue\n                trackingValue\n                __typename\n              }\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment MarketplaceSuggestions on reverb_search_SearchResponse_Suggestion {\n  text\n  __typename\n}\n\nfragment ListViewListings on Listing {\n  _id\n  id\n  categoryUuids\n  state\n  shop {\n    _id\n    name\n    slug\n    preferredSeller\n    quickShipper\n    quickResponder\n    address {\n      _id\n      locality\n      region\n      displayLocation\n      country {\n        _id\n        countryCode\n        name\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  seller {\n    _id\n    feedbackSummary {\n      receivedCount\n      rollingRatingPercentage\n      __typename\n    }\n    __typename\n  }\n  csp {\n    _id\n    webLink {\n      href\n      __typename\n    }\n    __typename\n  }\n  ...AddToCartButtonFields\n  ...ListingCardFields\n  ...ListingCreateOfferButtonData\n  ...InOtherCartsCardData\n  __typename\n}\n\nfragment AddToCartButtonFields on Listing {\n  _id\n  id\n  sellerId\n  listingType\n  pricing {\n    buyerPrice {\n      amount\n      amountCents\n      currency\n      __typename\n    }\n    __typename\n  }\n  preorderInfo {\n    onPreorder\n    estimatedShipDate {\n      seconds\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment ListingCardSignalsData on reverb_signals_Signal {\n  name\n  title\n  icon\n  __typename\n}"
}
