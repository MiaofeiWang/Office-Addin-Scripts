// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import os from "os";
import path from "path";
import {
  instrumentationKeyForOfficeAddinCLITools,
  OfficeAddinUsageData,
} from "office-addin-usage-data";

// Default certificate names
export const certificateDirectoryName = ".office-addin-dev-certs";
export const certificateDirectory = path.join(os.homedir(), certificateDirectoryName);
export const caCertificateFileName = "ca.crt";
export const caCertificatePath = path.join(certificateDirectory, caCertificateFileName);
export const localhostCertificateFileName = "localhost.crt";
export const localhostCertificatePath = path.join(
  certificateDirectory,
  localhostCertificateFileName
);
export const localhostKeyFileName = "localhost.key";
export const localhostKeyPath = path.join(certificateDirectory, localhostKeyFileName);

// Default certificate details
export const certificateName = "Developer CA for Microsoft Office Add-ins";
export const countryCode = "US";
export const daysUntilCertificateExpires = 30;
export const domain = ["127.0.0.1", "localhost"];
export const locality = "Redmond";
export const state = "WA";

// Usage data defaults
export const usageDataObject: OfficeAddinUsageData = new OfficeAddinUsageData({
  projectName: "office-addin-dev-certs",
  instrumentationKey: instrumentationKeyForOfficeAddinCLITools,
  raisePrompt: false,
});
