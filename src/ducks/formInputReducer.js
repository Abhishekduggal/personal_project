const UPDATE_MACHINETYPE_INPUT = "UPDATE_MACHINETYPE_INPUT";
const UPDATE_SHIFT_INPUT = "UPDATE_SHIFT_INPUT";
const UPDATE_SHOPORDERNUMBER_INPUT = "UPDATE_SHOPORDERNUMBER_INPUT";
const UPDATE_PRODUCTID_INPUT = "UPDATE_PRODUCTID_INPUT";
const UPDATE_WORKSTATION_INPUT = "UPDATE_WORKSTATION_INPUT";
const UPDATE_TEMP_INPUT = "UPDATE_TEMP_INPUT";
const UPDATE_PRODUCTSPEED_INPUT = "UPDATE_PRODUCTSPEED_INPUT";
const UPDATE_HRID_INPUT = "UPDATE_HRID_INPUT";
const UPDATE_PRODUCTDENSITY_INPUT = "UPDATE_PRODUCTDENSITY_INPUT";
const UPDATE_REJECTS_INPUT = "UPDATE_REJECTS_INPUT";
const UPDATE_WATERPRESSURE_INPUT = "UPDATE_WATERPRESSURE_INPUT";
const UPDATE_DRYLEVEL_INPUT = "UPDATE_DRYLEVEL_INPUT";
const UPDATE_ISSUELOG_INPUT = "UPDATE_ISSUELOG_INPUT";
const UPDATE_MACHINEOPERATING_INPUT = "UPDATE_MACHINEOPERATING_INPUT";
const UPDATE_COMMENTS_INPUT = "UPDATE_COMMENTS_INPUT";
const UPDATE_ISSUECATEGORY_INPUT = "UPDATE_ISSUECATEGORY_INPUT";
const UPDATE_ISSUERESOLUTION_INPUT = "UPDATE_ISSUERESOLUTION_INPUT";
const UPDATE_PACKAGINGISSUE_INPUT = "UPDATE_PACKAGINGISSUE_INPUT";
const UPDATE_TRAINING_INPUT = "UPDATE_TRAINING_INPUT";
const UPDATE_TRAININGCATEGORY_INPUT = "UPDATE_TRAININGCATEGORY_INPUT";
const UPDATE_IMGURL_INPUT = "UPDATE_IMGURL_INPUT";
const RESET = "RESET";

const initialState = {
  machinetype: "",
  shift: "",
  shopordernumber: "",
  productid: "",
  workstation: "",
  temp: "",
  productspeed: "",
  hrid: "",
  productdensity: "",
  rejects: "",
  waterpressure: "",
  drylevel: "",
  issuelog: "",
  machineoperating: "",
  comments: "",
  issuecategory: "",
  issueresolution: "",
  packagingissue: "",
  training: "",
  trainingcategory: "",
  imgurl: ""
};

export function createFormReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MACHINETYPE_INPUT:
      return {
        ...state,
        machinetype: action.payload
      };
    case UPDATE_SHIFT_INPUT:
      return {
        ...state,
        shift: action.payload
      };

    case UPDATE_SHOPORDERNUMBER_INPUT:
      return {
        ...state,
        shopordernumber: action.payload
      };

    case UPDATE_PRODUCTID_INPUT:
      return {
        ...state,
        productid: action.payload
      };

    case UPDATE_WORKSTATION_INPUT:
      return {
        ...state,
        workstation: action.payload
      };

    case UPDATE_TEMP_INPUT:
      return {
        ...state,
        temp: action.payload
      };

    case UPDATE_PRODUCTSPEED_INPUT:
      return {
        ...state,
        productspeed: action.payload
      };

    case UPDATE_HRID_INPUT:
      return {
        ...state,
        hrid: action.payload
      };

    case UPDATE_PRODUCTDENSITY_INPUT:
      return {
        ...state,
        productdensity: action.payload
      };

    case UPDATE_REJECTS_INPUT:
      return {
        ...state,
        rejects: action.payload
      };

    case UPDATE_WATERPRESSURE_INPUT:
      return {
        ...state,
        waterpressure: action.payload
      };

    case UPDATE_DRYLEVEL_INPUT:
      return {
        ...state,
        drylevel: action.payload
      };

    case UPDATE_ISSUELOG_INPUT:
      return {
        ...state,
        issuelog: action.payload
      };

    case UPDATE_MACHINEOPERATING_INPUT:
      return {
        ...state,
        machineoperating: action.payload
      };

    case UPDATE_COMMENTS_INPUT:
      return {
        ...state,
        comments: action.payload
      };

    case UPDATE_ISSUECATEGORY_INPUT:
      return {
        ...state,
        issuecategory: action.payload
      };

    case UPDATE_ISSUERESOLUTION_INPUT:
      return {
        ...state,
        issueresolution: action.payload
      };

    case UPDATE_PACKAGINGISSUE_INPUT:
      return {
        ...state,
        packagingissue: action.payload
      };

    case UPDATE_TRAINING_INPUT:
      return {
        ...state,
        training: action.payload
      };

    case UPDATE_TRAININGCATEGORY_INPUT:
      return {
        ...state,
        trainingcategory: action.payload
      };

    case UPDATE_IMGURL_INPUT:
      return {
        ...state,
        imgurl: action.payload
      };

    case RESET:
      return {
        state: action.payload
      };

    default:
      return state;
  }
}

export function updateMachineTypeInput(machinetype) {
  return {
    type: UPDATE_MACHINETYPE_INPUT,
    payload: machinetype
  };
}

export function updateShiftInput(shift) {
  return {
    type: UPDATE_SHIFT_INPUT,
    payload: shift
  };
}

export function updateShopOrderNumberInput(shopordernumber) {
  return {
    type: UPDATE_SHOPORDERNUMBER_INPUT,
    payload: shopordernumber
  };
}

export function updateProductIdInput(productid) {
  return {
    type: UPDATE_PRODUCTID_INPUT,
    payload: productid
  };
}

export function updateWorstationInput(worstation) {
  return {
    type: UPDATE_WORKSTATION_INPUT,
    payload: worstation
  };
}

export function updateTempInput(temp) {
  return {
    type: UPDATE_TEMP_INPUT,
    payload: temp
  };
}

export function updateProductSpeedInput(productspeed) {
  return {
    type: UPDATE_PRODUCTSPEED_INPUT,
    payload: productspeed
  };
}

export function updateHrIdInput(hrid) {
  return {
    type: UPDATE_HRID_INPUT,
    payload: hrid
  };
}

export function updateProductDensityInput(productdensity) {
  return {
    type: UPDATE_PRODUCTDENSITY_INPUT,
    payload: productdensity
  };
}

export function updateRejectsInput(rejects) {
  return {
    type: UPDATE_REJECTS_INPUT,
    payload: rejects
  };
}

export function updateWaterPressureInput(waterpressure) {
  return {
    type: UPDATE_WATERPRESSURE_INPUT,
    payload: waterpressure
  };
}

export function updateDryLevelInput(drylevel) {
  return {
    type: UPDATE_DRYLEVEL_INPUT,
    payload: drylevel
  };
}

export function updateIssueLogInput(issuelog) {
  return {
    type: UPDATE_ISSUELOG_INPUT,
    payload: issuelog
  };
}

export function updateMachineOperatingInput(machineoperating) {
  return {
    type: UPDATE_MACHINEOPERATING_INPUT,
    payload: machineoperating
  };
}

export function updateCommentsInput(comments) {
  return {
    type: UPDATE_COMMENTS_INPUT,
    payload: comments
  };
}

export function updateIssueCategoryInput(issuecategory) {
  return {
    type: UPDATE_ISSUECATEGORY_INPUT,
    payload: issuecategory
  };
}

export function updateIssueResolutionInput(issueresolution) {
  return {
    type: UPDATE_ISSUERESOLUTION_INPUT,
    payload: issueresolution
  };
}

export function updatePackagingIssueInput(packagingissue) {
  return {
    type: UPDATE_PACKAGINGISSUE_INPUT,
    payload: packagingissue
  };
}

export function updateTrainingInput(training) {
  return {
    type: UPDATE_TRAINING_INPUT,
    payload: training
  };
}

export function updateTrainingCategoryInput(trainingcategory) {
  return {
    type: UPDATE_TRAININGCATEGORY_INPUT,
    payload: trainingcategory
  };
}

export function updateImgUrlInput(imgurl) {
  return {
    type: UPDATE_IMGURL_INPUT,
    payload: imgurl
  };
}

export function reset() {
  return {
    type: RESET,
    payload: ""
  };
}

export default createFormReducer;
