// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import usageData from "office-addin-usage-data";

// Usage data defaults
export const usageDataObject: usageData.OfficeAddinUsageData = new usageData.OfficeAddinUsageData({
  projectName: "office-addin-debugging",
  instrumentationKey: usageData.instrumentationKeyForOfficeAddinCLITools,
  raisePrompt: false,
});
